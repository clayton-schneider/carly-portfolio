import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import * as prismicNext from "@prismicio/next";
import sm from "./sm.json";
import { AllDocumentTypes } from "./types.generated";
import { LinkResolverFunction } from "@prismicio/helpers";

import { PrismicDocument } from "@prismicio/types";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
// Update the Link Resolver to match your project's route structure
export const linkResolver: LinkResolverFunction = (doc) => {
  switch (doc.type) {
    case "homepage":
      return "/";
    case "page":
      return `/${doc.uid}`;
    default:
      return "/";
  }
};

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (
  config: prismic.ClientConfig & prismicNext.CreateClientConfig
) => {
  const client = prismic.createClient<AllDocumentTypes>(sm.apiEndpoint, config);

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
