// Import Types
import { Header } from "./Header";
import { Navigation } from "../typings";
import { FunctionComponent } from "react";

interface ILayoutProps {
  navigation: Navigation;
  children: JSX.Element;
}

export const Layout: FunctionComponent<ILayoutProps> = ({
  navigation,
  children,
}: ILayoutProps) => {
  return (
    <div className="mx-auto max-w-7xl px-[5%] xl:px-0">
      <Header navigation={navigation} />
      {children}
    </div>
  );
};
