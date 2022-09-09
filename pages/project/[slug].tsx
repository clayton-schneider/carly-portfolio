// Import Types
import { Project, SiteSEO } from "../../typings";
import { GetStaticProps } from "next";

// Import Sanity Functions
import { urlFor, sanityClient } from "../../sanity";
import { getSiteSEO } from "../../utils/fetchData";

// Import Next Functions
import Head from "next/head";
import PortableText from "react-portable-text";

interface IProjectProps {
  project: Project;
  siteSEO: SiteSEO;
}

const Project = ({ project, siteSEO }: IProjectProps) => {
  console.log(project.name);
  return (
    <div>
      <Head>
        <title>{project.name}</title>
        <meta name="description" content={project.summary} />
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
          content={project.body}
        />
      </main>
    </div>
  );
};

export default Project;

export const getStaticPaths = async () => {
  const query = `*[_type== "project"] {
    slug
  }`;
  const projects = await sanityClient.fetch(query);

  const paths = projects.map((project: Project) => ({
    params: {
      slug: project.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type== "project" && slug.current == $slug][0] {
    ...
  }`;

  const project = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!project) {
    return {
      notFound: true,
    };
  }

  const siteSEO = await getSiteSEO();

  return {
    props: {
      project,
      siteSEO,
    },
  };
};
