export default {
  name: "webImage",
  title: "Web Image",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "altText",
      title: "Alt Text",
      type: "string",
      description:
        "A short description of the image. Important for accessibility and SEO.",
    },
  ],
};
