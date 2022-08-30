export default {
  name: "skill",
  title: "Skill",
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
        source: "skillName",
      },
    },
    {
      name: "image",
      title: "Skill Image",
      type: "image",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
