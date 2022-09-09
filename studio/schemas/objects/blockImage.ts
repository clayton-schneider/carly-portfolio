export default {
  name: "blockImage",
  title: "Image",
  type: "object",
  fields: [
    {
      name: "source",
      title: "Image",
      type: "image",
      options: {
        hotspot: "true",
      },
    },
    {
      name: "caption",
      title: "caption",
      type: "string",
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
