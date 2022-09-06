import { m } from "framer-motion";

export default {
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Project Name",
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
      name: "date",
      title: "Date",
      type: "date",
      description: "When the project was completed",
      dateFormat: "MMMM YYYY",
    },
    {
      name: "summary",
      title: "Project Summary",
      type: "text",
      description: "A quick summary of the project",
    },
    {
      name: "image",
      title: "Project Image",
      type: "image",
      description: "The image that will be displayed for this project",
      options: {
        hotspot: "true",
      },
      fields: [
        {
          name: "altText",
          title: "Alternative Text",
          description:
            "Short description of what the image represents. For accessibility and SEO purposes.",
          type: "string",
        },
      ],
    },
    {
      name: "body",
      title: "Project Explanation",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
