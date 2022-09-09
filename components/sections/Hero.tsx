import { urlFor } from "../../sanity";

import Image from "next/image";

interface IHeroProps {
  _type: string;
  _key: string;
  sectionTitle: string;
  headline: string;
  body: string;
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
      className="my-20 flex flex-col justify-between md:flex-row"
    >
      <div className="relative z-10 mx-auto max-w-sm text-center md:mx-0 md:mt-10 md:max-w-lg md:text-left">
        <h6 className="text-5xl font-bold uppercase text-primary">
          {sectionTitle}
        </h6>
        <h2 className="mt-2 text-3xl">
          {headline ? headline : "Make sure to add a headline"}
        </h2>
        <p className="mt-2 text-lg">
          {body ? body : "Make sure to add body text!"}
        </p>
        {link && (
          <a
            className="mt-2 inline-block rounded-3xl border border-primary py-1 px-8 font-bold text-primary"
            href={link.link}
          >
            {link.linkText}
          </a>
        )}
      </div>

      <div className="relative mx-auto mt-10 md:mx-0 md:mt-0">
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