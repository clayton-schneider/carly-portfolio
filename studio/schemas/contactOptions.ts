export default {
  name: "contactOptions",
  title: "Contact Options",
  type: "document",
  // Don't allow users to create or delete this object
  __experimental_actions: ["create", "update", /*'delete'*/ "publish"],
  fields: [
    {
      name: "contactLinks",
      title: "Contact Links",
      description: "Links of to external resources",
      type: "array",
      of: [{ type: "contactLink" }],
    },
  ],
};
