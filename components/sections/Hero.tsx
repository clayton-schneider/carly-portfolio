import { urlFor } from "../../sanity";
import Serializer from "../../components/Serializer";
import PortableText from "react-portable-text";

import Image from "next/image";

interface IHeroProps {
  _type: string;
  _key: string;
  sectionTitle: string;
  headline: string;
  body: object[];
  id: string;
  link: {
    _type: string;
    link: string;
    linkText: string;
  };
  image: {
    _type: string;
    altText: string;
    source: string;
  };
}

export const Hero = (props: IHeroProps) => {
  const { id, sectionTitle, headline, body, link, image } = props;
  return (
    <section
      id={id}
      className="my-20 flex flex-col justify-between lg:flex-row lg:space-x-5"
    >
      <div className="relative z-10 mx-auto max-w-2xl text-center md:mt-10 lg:mx-0 lg:text-left">
        <h6 className="text-5xl font-bold uppercase text-primary">
          {sectionTitle}
        </h6>
        <h2 className="mt-2 text-3xl">
          {headline ? headline : "Make sure to add a headline"}
        </h2>
        <PortableText
          className="prose"
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
          content={body}
          serializers={Serializer}
        />
        {link && (
          <a
            className="mt-2 inline-block rounded-3xl border border-primary py-1 px-8 font-bold text-primary"
            href={link.link}
          >
            {link.linkText}
          </a>
        )}
      </div>

      <div className="relative mx-auto mt-10 lg:mx-0 lg:mt-0">
        <span className="absolute -bottom-4 -left-10 z-10 block h-20 w-20 rounded-full bg-dark"></span>
        <span className="absolute -right-72 -bottom-10 z-0 block h-[500px] w-[500px] rounded-full bg-primary"></span>
        {image && (
          <Image
            priority
            className="relative rounded-3xl"
            objectFit="cover"
            width={600}
            height={700}
            src={urlFor(image.source).url()!}
            alt={image.altText ? image.altText : ""}
          />
        )}
      </div>
    </section>
  );
};
