import { sanityClient } from "../../sanity";

export const getSiteNavigation = async () => {
  const query = `*[_type== "siteNavigation"][0] {
    navigation
  }`;
  return await sanityClient.fetch(query);
};
