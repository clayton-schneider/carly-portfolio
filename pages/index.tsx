// Types
import { GetStaticProps } from "next";
import { PrismicDocument } from "@prismicio/types";

// Components
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { Portfolio } from "../components/Portfolio/Past";

// Prismic Setup
import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices";

import Head from "next/head";

const Home = ({ page }: { page: PrismicDocument }) => {
  return (
    <div>
      <Head>
        <title>Carly Fisher</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <>
            <Hero />
            <Portfolio />
            <SliceZone slices={page.data.slices} components={components} />
          </>
        </Layout>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  // Because there is linked data
  // For Reference: https://community.prismic.io/t/not-able-to-query-slice-machine-slices-with-graphquery/7030/23
  const query = `{
    homepage{
      ...homepageFields
      slices {
       ...on portfolio{
         variation{
           ...on default{
             primary{
               title
               description
             }
             items {
               project{
                 ...projectFields
               }
             }
           }
         }
       }
     }
    }
  }`;

  const client = createClient({ previewData });

  const page = await client.getSingle("homepage", { graphQuery: query });

  return {
    props: {
      page,
    },
  };
};
