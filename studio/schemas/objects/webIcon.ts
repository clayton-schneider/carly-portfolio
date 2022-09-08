export default {
  name: "webIcon",
  title: "Web Icon",
  type: "object",
  fields: [
    {
      name: "source",
      title: "Image",
      type: "image",
      description: "Must be an svg filetype",
      options: {
        accept: ".svg",
      },
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
