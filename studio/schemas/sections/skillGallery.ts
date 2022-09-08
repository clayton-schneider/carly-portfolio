export default {
  name: "skillGallery",
  title: "Skill Gallery Section",
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
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    },
  ],
};
