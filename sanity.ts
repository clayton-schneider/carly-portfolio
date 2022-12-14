import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2022-09-08",
  useCdn: false,
};

// Set up the client for fetching data in getProps page functions
export const sanityClient = createClient(config);

// Help generate image URLs with only asset reference data in document
export const urlFor = (source: string) =>
  createImageUrlBuilder(config).image(source);
