export default {
  name: "siteNavigation",
  title: "Site Navigation",
  type: "document",
  // Don't allow users to create or delete this object
  __experimental_actions: ["create", "update", /*'delete'*/ "publish"],
  fields: [
    {
      name: "navigation",
      title: "Site Navigation",
      description: "Determines how the site navigation works & functions",
      type: "array",
      of: [{ type: "navLink" }],
    },
  ],
};
