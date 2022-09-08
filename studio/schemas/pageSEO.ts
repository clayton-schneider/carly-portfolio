export default {
  name: "pageSEO",
  title: "Page SEO",
  type: "document",
  // Don't allow users to delete this object
  __experimental_actions: ["create", "update", /*'delete'*/ "publish"],
  fields: [
    {
      name: "title",
      title: "Site Title",
      description:
        "This will go in the top of the browser tab & will show on Google Searches & where the logo goes",
      type: "string",
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
      description: "Meta description for seo purposes",
    },
    {
      name: "favicon",
      title: "Site Favicon",
      type: "image",
      description:
        "The little image that goes on the left side of a browser tab",
    },
  ],
};
