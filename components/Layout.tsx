import { Header } from "./Header";

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="mx-auto max-w-7xl px-[5%] xl:px-0">
      <Header />
      {children}
    </div>
  );
};
