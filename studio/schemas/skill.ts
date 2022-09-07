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
      type: "webImage",
    },
    {
      name: "body",
      title: "Skill Explanation",
      type: "blockContent",
    },
  ],
};
