// Import Types
import { Skill, SiteSEO, Navigation } from "../../typings";
import { GetStaticProps } from "next";

// Import Sanity Functions
import { urlFor, sanityClient } from "../../sanity";
import { getSiteSEO, getSiteNavigation } from "../../utils/fetchData";

import Serializer from "../../components/Serializer";
import PortableText from "react-portable-text";
import { Layout } from "../../components/Layout";

// Import Next Functions
import Head from "next/head";
import Image from "next/image";

interface ISkillProps {
  skill: Skill;
  navigation: Navigation;
  siteSEO: SiteSEO;
}

const Skill = ({ skill, siteSEO, navigation }: ISkillProps) => {
  return (
    <div>
      <Head>
        <title>{`${skill.name} | Carly Fisher`}</title>
        <meta name="description" content={`${skill.name} in action`} />
        <link
          rel="icon"
          href={
            siteSEO.favicon ? urlFor(siteSEO.favicon).url() : "/favicon.ico"
          }
        />
      </Head>
      <main>
        <Layout navigation={navigation}>
          <div className="my-20 mx-auto max-w-3xl">
            <h1 className="text-5xl font-bold">{skill.name}</h1>
            <div className="relative my-5 h-96 w-full">
              <Image
                layout="fill"
                objectFit="contain"
                priority
                src={urlFor(skill.image.source).url()}
              />
            </div>
            <PortableText
              className="prose"
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={skill.body}
              serializers={Serializer}
            />
          </div>
        </Layout>
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
  // necessary to expand for internal linking
  const query = `*[_type== "skill" && slug.current == $slug][0] {
    ...,
    body[]{
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          ...,
          "": reference->{
            "prefix": _type, 
            slug
           }
        }
      }
    }
  }`;

  const skill = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!skill) {
    return {
      notFound: true,
    };
  }

  const { navigation } = await getSiteNavigation();
  const siteSEO = await getSiteSEO();

  return {
    props: {
      skill,
      navigation,
      siteSEO,
    },
  };
};
