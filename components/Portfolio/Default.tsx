import { FunctionComponent } from "react";
import { PortfolioSliceDefault, ProjectDocument } from "../../types.generated";

import Image from "next/image";

export const DefaultPortfolio: FunctionComponent<PortfolioSliceDefault> = (
  props
) => {
  // Get projects
  // Add typing from linked fetching on projects
  const projects = props.items as unknown as { project: ProjectDocument }[];

  return (
    <section id="work" className="my-20">
      <h2 className="text-5xl font-bold uppercase text-primary">
        {props.primary.sectionTitle}
      </h2>
      <div className="mt-10 flex flex-col items-center justify-between space-y-5 space-x-0 md:flex-row md:space-y-0 md:space-x-5">
        {projects.map((item, index) => (
          <div className="max-w-[600px] text-dark" key={`past-work-${index}`}>
            {/* If an image */}
            {item.project.data.logo && (
              <Image
                className="rounded-3xl"
                objectFit="cover"
                width={600}
                height={350}
                src={item.project.data.logo.url!}
                alt={
                  item.project.data.logo.alt
                    ? item.project.data.logo.alt
                    : "Past Project"
                }
              />
            )}
            {/* In case of no image */}
            {!item.project.data.logo && (
              <img
                className="rounded-3xl"
                src="https://via.placeholder.com/600x350"
                alt=""
              />
            )}
            <p className="mt-2 text-sm">
              {item.project.data.year ? item.project.data.year : "Year of Work"}
            </p>
            <h4 className="mt-2 text-2xl font-bold">
              {item.project.data.title
                ? item.project.data.title
                : "Project Title"}
            </h4>
            <p className="mt-1 text-lg">
              {item.project.data.description
                ? item.project.data.description
                : "Project Description"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
