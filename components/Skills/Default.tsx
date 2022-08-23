import { FunctionComponent } from "react";

import { SkillsSliceDefault, SkillDocument } from "../../types.generated";

import Image from "next/image";

export const DefaultSkills: FunctionComponent<SkillsSliceDefault> = ({
  primary: { sectionTitle },
  items,
}) => {
  // Add typing to linked fetching on skills
  const skills = items as unknown as { skill: SkillDocument }[];

  return (
    <section className="my-20">
      <h2 className="text-5xl font-bold uppercase text-primary">
        {sectionTitle}
      </h2>
      <div className="noscrollbar mt-10 flex space-x-8 overflow-x-scroll pb-2">
        {skills.map((item, index) => (
          <div
            className="flex h-[150px] w-[250px] flex-none items-center justify-center rounded-3xl bg-neutral-300"
            key={`skill-${index}`}
          >
            {item.skill.data.image && (
              <Image
                className="stroke-red-500"
                width={item.skill.data.image.dimensions?.width}
                height={item.skill.data.image.dimensions?.height}
                src={item.skill.data.image.url!}
                alt={
                  item.skill.data.image.alt
                    ? item.skill.data.image.alt
                    : "marketing research skill"
                }
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
