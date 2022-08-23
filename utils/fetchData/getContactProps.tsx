import { Client } from "@prismicio/client";

export const getContactProps = async ({ client }: { client: Client }) => {
  return await client.getSingle("contact");
};
