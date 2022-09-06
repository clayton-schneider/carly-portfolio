export default {
  name: "skill",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Skill Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "image",
      title: "Skill Image",
      type: "image",
      fields: [
        {
          name: "altText",
          title: "Alt Text",
          description:
            "Short description of what the image represents. For accessibility and SEO purposes.",
          type: "string",
        },
      ],
    },
    {
      name: "body",
      title: "Skill Explanation",
      type: "blockContent",
    },
  ],
};
