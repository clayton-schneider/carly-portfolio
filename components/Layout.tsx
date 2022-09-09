// Import Types
import { Header } from "./Header";

export const Layout = ({
  navigation,
  children,
}: {
  navigation: any;
  children: JSX.Element;
}) => {
  return (
    <div className="mx-auto max-w-7xl px-[5%] xl:px-0">
      <Header navigation={navigation} />
      {children}
    </div>
  );
};
