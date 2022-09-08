// Import Types
import { FunctionComponent } from "react";
import { NavLink } from "./NavLink";

import { MobileMenu } from "./MobileMenu";

export const Header: FunctionComponent = (props) => {
  const { identity, navigation } = props.data;
  console.log;
  return (
    <header className="my-5 flex items-center justify-between">
      <h1 className="text-3xl font-bold text-dark">{identity}</h1>

      {/* Navigation Links */}
      <div className="relative z-30 hidden space-x-2 md:block">
        {navigation &&
          navigation.map((item, index) => (
            <NavLink
              key={`link-${index}`}
              className="text-xl text-dark"
              {...item}
            />
          ))}
      </div>

      <MobileMenu className="md:hidden" navigation={navigation} />
    </header>
  );
};
