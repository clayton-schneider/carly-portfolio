import { Image } from "@sanity/types";

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
