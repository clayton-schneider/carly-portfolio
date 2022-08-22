import { Client } from "@prismicio/client";

export const getHeaderProps = async ({ client }: { client: Client }) => {
  return await client.getSingle("header");
};
