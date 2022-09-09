// NOT A FUNCTION COMPONENT BUT AN OBJECT OF FUNCTION COMPONENTS
// Necessary to specify output of portable text

// Use future version here for the images where the dimensions are unknown
import Image from "next/future/image";
import Link from "next/link";
import { urlFor } from "../sanity";

const Serializer = {
  h2: (props: any) => <h2 className="my-2 text-3xl font-bold" {...props}></h2>,
  h3: (props: any) => <h3 className="my-2 text-2xl font-bold" {...props}></h3>,
  h4: (props: any) => <h4 className="my-2 text-xl font-bold" {...props}></h4>,
  normal: (props: any) => <p className="text-lg" {...props}></p>,
  link: (props: any) => <a className="text-primary" {...props}></a>,
  ul: (props: any) => <ul className="marker:text-primary" {...props}></ul>,
  internalLink: (props: any) => (
    <Link href={`/${props.prefix}/${props.slug.current}`}>
      <span
        className="cursor-pointer font-medium text-primary underline"
        {...props}
      ></span>
    </Link>
  ),
  blockImage: (props: any) => (
    <div className="my-5">
      <Image
        className="h-auto max-h-[600px] w-full object-contain"
        width="0"
        height="0"
        sizes="100vw"
        src={urlFor(props.source).maxHeight(600).url()}
        alt={props.altText}
      />
      <p className="text-center">{props.caption}</p>
    </div>
  ),
};

export default Serializer;
