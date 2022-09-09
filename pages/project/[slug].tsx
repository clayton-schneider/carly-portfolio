// Import Types
import { Project, SiteSEO, Navigation } from "../../typings";
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

interface IProjectProps {
  project: Project;
  navigation: Navigation;
  siteSEO: SiteSEO;
}

const Project = ({ project, siteSEO, navigation }: IProjectProps) => {
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
        <Layout navigation={navigation}>
          <div className="my-20 mx-auto max-w-3xl">
            <h1 className="text-5xl font-bold">{project.name}</h1>
            <div className="relative my-5 h-96 w-full">
              <Image
                layout="fill"
                objectFit="cover"
                priority
                src={urlFor(project.image.source).url()}
              />
            </div>
            <PortableText
              className="prose"
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={project.body}
              serializers={Serializer}
            />
          </div>
        </Layout>
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
  // necessary to expand query to support internal linking
  const query = `*[_type== "project" && slug.current == $slug][0] {
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

  const project = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!project) {
    return {
      notFound: true,
    };
  }

  const { navigation } = await getSiteNavigation();
  const siteSEO = await getSiteSEO();

  return {
    props: {
      project,
      navigation,
      siteSEO,
    },
  };
};
