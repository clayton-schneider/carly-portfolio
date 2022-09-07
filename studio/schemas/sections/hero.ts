export default {
  name: "hero",
  title: "Hero Section",
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
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "body",
      title: "Section Body",
      type: "text",
    },
    {
      name: "image",
      title: "Hero Image",
      type: "webImage",
    },
  ],
};