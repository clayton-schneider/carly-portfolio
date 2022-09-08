import Image from "next/image";
import { urlFor } from "../../sanity";

interface IPortfolioProps {
  _type: string;
  _key: string;
  sectionTitle: string;
  id: string;
  pastWorks: [
    {
      date: string;
      name: string;
      slug: {
        current: string;
      };
      summary: string;
      image: {
        _type: string;
        altText: string;
        source: string;
      };
    }
  ];
}

export const Portfolio = (props: IPortfolioProps) => {
  const { sectionTitle, id, pastWorks } = props;

  return (
    <section id={id} className="my-20">
      <h2 className="text-5xl font-bold uppercase text-primary">
        {sectionTitle}
      </h2>
      <div className="mt-10 flex flex-col items-center justify-between space-y-5 space-x-0 md:flex-row md:space-y-0 md:space-x-5">
        {pastWorks.map((pastWork, index) => (
          <div className="max-w-[600px] text-dark" key={`past-work-${index}`}>
            {/* If an image */}
            {pastWork.image.source && (
              <Image
                className="rounded-3xl"
                objectFit="cover"
                width={600}
                height={350}
                src={urlFor(pastWork.image.source).url()}
                alt={
                  pastWork.image.altText
                    ? pastWork.image.altText
                    : "Past Project"
                }
              />
            )}
            {/* In case of no image */}
            {!pastWork.image.source && (
              <img
                className="rounded-3xl"
                src="https://via.placeholder.com/600x350"
                alt=""
              />
            )}
            <p className="mt-2 text-sm">
              {pastWork.date ? pastWork.date : "Year of Work"}
            </p>
            <h4 className="mt-2 text-2xl font-bold">
              {pastWork.name ? pastWork.name : "Project Title"}
            </h4>
            <p className="mt-1 text-lg">
              {pastWork.summary ? pastWork.summary : "Project summary"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
