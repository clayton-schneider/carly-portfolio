import { urlFor } from "../../sanity";

interface IContactProps {
  _type: string;
  _key: string;
  sectionTitle: string;
  id: string;
  contactLinks: [
    {
      _type: string;
      link: string;
      linkText: string;
      icon: {
        _type: string;
        altText: string;
        source: string;
      };
    }
  ];
}

export const Contact = (props: IContactProps) => {
  const { sectionTitle, id, contactLinks } = props;
  const placeholderIcon = "https://via.placeholder.com/30";
  return (
    <section id={id} className="my-20">
      <h2 className="text-5xl font-bold uppercase text-primary">
        {sectionTitle ? sectionTitle : "Add a section title"}
      </h2>
      <div className="my-10 space-y-3 text-lg">
        {contactLinks.map((contactLink, index) => (
          <div key={`contact-link-${index}`} className="flex space-x-2">
            <img
              src={
                contactLink.icon.source
                  ? urlFor(contactLink.icon.source).url()!
                  : placeholderIcon
              }
              alt={contactLink.icon.altText ? contactLink.icon.altText : ""}
            />
            <a href={contactLink.link ? contactLink.link : "/404"}>
              {contactLink.linkText ? contactLink.linkText : "Insert link text"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
