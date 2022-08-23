import { FunctionComponent } from "react";
import { ContactDocument } from "../../types.generated";

// Render Helpers
import { Link } from "prismic-reactjs";

export const Contact: FunctionComponent<ContactDocument> = ({
  data: {
    email,
    emailText,
    emailIcon,
    resumeIcon,
    resumeLink,
    resumeText,
    linkedinIcon,
    linkedinLink,
    linkedinText,
    sectionTitle,
  },
}) => {
  const placeholderIcon = "https://via.placeholder.com/30";
  return (
    <section className="my-20">
      <h2 className="text-5xl font-bold uppercase text-primary">
        Get in Touch
      </h2>
      <div className="my-10 space-y-3 text-lg">
        <div id="contact" className="flex space-x-2">
          <img
            src={emailIcon ? emailIcon.url! : placeholderIcon}
            alt={emailIcon.alt ? emailIcon.alt : "email icon"}
          />
          <a href={email ? `mailto:${email}` : "/404"}>
            {emailText ? emailText : "email text"}
          </a>
        </div>
        <div id="resume" className="flex space-x-2">
          <img
            src={resumeIcon ? resumeIcon.url! : placeholderIcon}
            alt={resumeIcon.alt ? resumeIcon.alt : "resume icon"}
          />
          <a target="_nofollow" href={resumeLink ? resumeLink : "/404"}>
            {resumeText}
          </a>
        </div>
        <div className="flex space-x-2">
          <img
            src={linkedinIcon ? linkedinIcon.url! : placeholderIcon}
            alt={linkedinIcon.alt ? linkedinIcon.alt : "linkedin icon"}
          />
          <a target="_nofollow" href={linkedinLink ? linkedinLink : "/404"}>
            {linkedinText}
          </a>
        </div>
      </div>
    </section>
  );
};
