export default {
  name: "contact",
  title: "Contact Section",
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
      name: "contactLinks",
      title: "Contact Links",
      description: "Links of to external resources",
      type: "array",
      of: [{ type: "contactLink" }],
    },
  ],
};
