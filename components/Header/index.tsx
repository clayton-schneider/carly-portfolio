// Import Types
import { FunctionComponent } from "react";
import { HeaderDocument } from "../../types.generated";

import { MobileMenu } from "./MobileMenu";

export const Header: FunctionComponent<HeaderDocument> = (props) => {
  const { identity, navigation } = props.data;
  console.log;
  return (
    <header className="my-5 flex items-center justify-between">
      <h1 className="text-3xl font-bold text-dark">{identity}</h1>

      {/* Navigation Links */}
      <div className="space-x-2">
        {navigation &&
          navigation.map((item, index) => (
            <NavLink key={`link-${index}`} {...item} />
          ))}
      </div>

      {/* <MobileMenu /> */}
    </header>
  );
};

const NavLink = ({
  link,
  linkText,
}: {
  link: string | null;
  linkText: string | null;
}) => {
  return (
    <>
      {link && (
        <a className="text-lg text-dark" href={link}>
          {linkText}
        </a>
      )}
      {!link && <p className="text-lg text-dark">{linkText}</p>}
    </>
  );
};
