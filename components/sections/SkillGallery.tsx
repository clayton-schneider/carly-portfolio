import Image from "next/image";
import Link from "next/link";

// Cant use since we need dimensions of image
// There is currently no way to use urlbuilder and get image dimensions
// This is why in the query we specifically fetch the url and dimensions
// import { urlFor } from "../../sanity";

interface IPortfolioProps {
  _type: string;
  _key: string;
  sectionTitle: string;
  id: string;
  skills: [
    {
      name: string;
      slug: {
        current: string;
      };
      image: {
        _type: string;
        altText: string;
        source: {
          dimensions: {
            height: number;
            width: number;
          };
          url: string;
        };
      };
    }
  ];
}

export const SkillGallery = (props: IPortfolioProps) => {
  const { sectionTitle, id, skills } = props;
  return (
    <section id={id} className="my-20">
      <h2 className="text-5xl font-bold uppercase text-primary">
        {sectionTitle ? sectionTitle : "Skills"}
      </h2>
      <div className="noscrollbar mt-10 flex space-x-8 overflow-x-scroll pb-2">
        {skills.map((skill, index) => (
          <Link key={`skill-${index}`} href={`/skill/${skill.slug.current}`}>
            <div className="flex h-[150px] w-[250px] flex-none cursor-pointer items-center justify-center rounded-3xl bg-neutral-300">
              {skill.image.source && (
                <Image
                  className="stroke-red-500"
                  width={skill.image.source.dimensions.width}
                  height={skill.image.source.dimensions.height}
                  src={skill.image.source.url}
                  alt={
                    skill.image.altText
                      ? skill.image.altText
                      : "marketing research skill"
                  }
                />
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
