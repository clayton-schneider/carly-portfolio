import { FunctionComponent } from "react";

import { PrismicRichText } from "@prismicio/react";
import { PortfolioSliceDefault, ProjectDocument } from "../../types.generated";

export const DefaultPortfolio: FunctionComponent<PortfolioSliceDefault> = (
  props
) => {
  // Get projects
  // Add typing from linked fetching on projects
  const projects = props.items as unknown as { project: ProjectDocument }[];
  console.log(projects);

  return (
    // <section id={props.id}>
    <section>
      <PrismicRichText field={props.primary.title} />
      <PrismicRichText field={props.primary.description} />

      {/* Linked content */}
      {projects.map((project, index: number) => (
        <div key={`project-${index}`}>
          <h6>{project.project.data.title}</h6>
          <p>{project.project.data.description}</p>
          {project.project.data.logo && (
            <img src={project.project.data.logo.url!} />
          )}
        </div>
      ))}
    </section>
  );
};
