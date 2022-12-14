// Types
import { GetStaticProps } from "next";
import { Navigation, SiteSEO } from "../typings";

// Components
import { Layout } from "../components/Layout";

// Data Fetching from Sanity
import { getSiteNavigation, getSiteSEO } from "../utils/fetchData";

// Sanity
import { sanityClient, urlFor } from "../sanity";
import { PageBuilder } from "../components/PageBuilder";

import Head from "next/head";

const Home = ({
  page,
  navigation,
  siteSEO,
}: {
  page: { sections: JSX.Element[] };
  navigation: Navigation;
  siteSEO: SiteSEO;
}) => {
  return (
    <div>
      <Head>
        <title>{siteSEO.title ? siteSEO.title : "Carly Fisher"}</title>
        <meta
          name="description"
          content={
            siteSEO.description
              ? siteSEO.description
              : "Generated by create next app"
          }
        />
        <link
          rel="icon"
          href={
            siteSEO.favicon ? urlFor(siteSEO.favicon).url() : "/favicon.ico"
          }
        />
      </Head>

      <main className="overflow-x-hidden">
        <Layout navigation={navigation}>
          <>
            <PageBuilder sections={page.sections} />
          </>
        </Layout>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const query = `*[_type == "homepage"]{
    sections[] {
      _type == "hero" => {
      ...
      },
      _type == "portfolio" => {
        ...,
        pastWorks[]->{date, slug, name, summary, image}
      },
      _type == "skillGallery" => {
        ...,
        skills[]->{
          image {
            ...,
            source {
              "": asset->{
                url,
                "": metadata{dimensions}
              }
            }
          }, 
          name,
          slug
        }
      },
      _type == "contact" => {
        ...,
        contactLinks[] {icon, link, linkText}
      }
    }
  }`;

  let page = await sanityClient.fetch(query);
  page = page[0];

  const { navigation } = await getSiteNavigation();

  const siteSEO = await getSiteSEO();

  return {
    props: {
      page,
      navigation,
      siteSEO,
    },
  };
};
