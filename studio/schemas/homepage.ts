export default {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "sections",
      type: "array",
      title: "Page Builder Sections",
      description: "Add/rearrange sections to determine the layout of the page",
      of: [{ type: "hero" }],
    },
  ],
};
