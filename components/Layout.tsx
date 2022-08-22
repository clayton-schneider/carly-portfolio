// Import Types
import { HeaderDocument } from "../types.generated";

import { Header } from "./Header";

export const Layout = ({
  header,
  children,
}: {
  header: HeaderDocument;
  children: JSX.Element;
}) => {
  return (
    <div className="mx-auto max-w-7xl px-[5%] xl:px-0">
      <Header {...header} />
      {children}
    </div>
  );
};
