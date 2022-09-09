// Import Types
import { Skill, SiteSEO } from "../../typings";
import { GetStaticProps } from "next";

// Import Sanity Functions
import { urlFor, sanityClient } from "../../sanity";
import { getSiteSEO } from "../../utils/fetchData";

// Import Next Functions
import Head from "next/head";
import PortableText from "react-portable-text";

interface ISkillProps {
  skill: Skill;
  siteSEO: SiteSEO;
}

const Skill = ({ skill, siteSEO }: ISkillProps) => {
  console.log(skill.name);
  return (
    <div>
      <Head>
        <title>{skill.name}</title>
        <meta name="description" content={`${skill.name} in action`} />
        <link
          rel="icon"
          href={
            siteSEO.favicon ? urlFor(siteSEO.favicon).url() : "/favicon.ico"
          }
        />
      </Head>
      <main>
        <PortableText
          className="prose"
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
          content={skill.body}
        />
      </main>
    </div>
  );
};

export default Skill;

export const getStaticPaths = async () => {
  const query = `*[_type== "skill"] {
    slug
  }`;
  const skills = await sanityClient.fetch(query);

  const paths = skills.map((skill: Skill) => ({
    params: {
      slug: skill.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type== "skill" && slug.current == $slug][0] {
    ...
  }`;

  const skill = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!skill) {
    return {
      notFound: true,
    };
  }

  const siteSEO = await getSiteSEO();

  return {
    props: {
      skill,
      siteSEO,
    },
  };
};
