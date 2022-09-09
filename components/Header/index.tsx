// Import Types
import { FunctionComponent } from "react";
import { Navigation } from "../../typings";

import { NavLink } from "./NavLink";

import { MobileMenu } from "./MobileMenu";

interface IHeaderProps {
  navigation: Navigation;
}

export const Header: FunctionComponent<IHeaderProps> = ({ navigation }) => {
  return (
    <header className="my-5 flex items-center justify-between">
      <h1 className="text-3xl font-bold text-dark">Carly Fisher</h1>

      {/* Navigation Links */}
      <div className="relative z-30 hidden space-x-4 md:block">
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
