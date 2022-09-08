export default {
  name: "portfolio",
  title: "Portfolio Section",
  type: "object",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    },
    {
      name: "id",
      title: "ID",
      description: "This is important for linking with the Site Navigation",
      type: "string",
    },
    {
      name: "pastWorks",
      title: "Past Works",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
    },
  ],
};
