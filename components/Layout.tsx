import { Header } from "./Header";

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      {children}
    </div>
  );
};
