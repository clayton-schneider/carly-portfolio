import { FunctionComponent } from "react";
import { HeroSliceDefault } from "../../types.generated";

import Image from "next/image";

export const DefaultHero: FunctionComponent<HeroSliceDefault> = ({
  primary: {
    headline,
    image,
    primaryLink,
    primaryLinkLabel,
    sectionTitle,
    subheadline,
  },
}) => {
  return (
    <section
      id="hero"
      className="my-20 flex flex-col justify-between md:flex-row"
    >
      <div className="relative z-50 mx-auto max-w-sm text-center md:mx-0 md:mt-10 md:max-w-lg md:text-left">
        <h6 className="text-5xl font-bold uppercase text-primary">
          {sectionTitle}
        </h6>
        <h2 className="mt-2 text-3xl">{headline}</h2>
        <p className="mt-2 text-lg">{subheadline}</p>
        {primaryLink && (
          <a
            className="mt-2 inline-block rounded-3xl border border-primary py-1 px-8 font-bold text-primary"
            href={primaryLink}
          >
            {primaryLinkLabel}
          </a>
        )}
      </div>

      <div className="relative mx-auto mt-10 md:mx-0 md:mt-0">
        <span className="absolute -bottom-4 -left-10 z-10 block h-20 w-20 rounded-full bg-dark"></span>
        <span className="absolute -right-72 -bottom-10 z-0 block h-[500px] w-[500px] rounded-full bg-primary"></span>
        {image && (
          <Image
            className="relative rounded-3xl"
            layout="fixed"
            objectFit="cover"
            width={600}
            height={700}
            src={image.url!}
            alt={image.alt ? image.alt : ""}
          />
        )}
      </div>
    </section>
  );
};
