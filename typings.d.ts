import { Image, StringSchemaType } from "@sanity/types";

interface webImage {
  _type: "webImage";
  altText: string;
  source: Image;
}

export interface homepage {}

interface navigationLink {
  link: string;
  linkText: string;
}

export interface Navigation extends Array<navigationLink> {}

export interface SiteSEO {
  title: string;
  description: string;
  favicon: string;
}

export interface Project {
  date: string;
  image: webImage;
  body: [object];
  slug: Slug;
  summary: string;
  name: string;
}

export interface Skill {
  image: webImage;
  body: [object];
  slug: Slug;
  name: string;
}
