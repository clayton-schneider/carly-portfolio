import { sanityClient } from "../../sanity";

export const getSiteSEO = async () => {
  const query = `*[_type== "pageSEO"][0] {
    title,
    description,
    favicon,
  }`;
  return await sanityClient.fetch(query);
};
