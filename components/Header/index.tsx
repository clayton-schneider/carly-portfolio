import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const navigation = [
    { link: "Work", linkLabel: "Work" },
    { link: "Skills", linkLabel: "Skills" },
    { link: "Contact", linkLabel: "Contact" },
    { link: "Resume", linkLabel: "Resume" },
  ];
  return (
    <header className="flex justify-between items-center my-5">
      <h1 className="font-bold text-3xl text-dark">Carly Fisher</h1>

      {/* Navigation Links */}
      <div className="space-x-2 hidden">
        {navigation &&
          navigation.map((item, index) => (
            <NavLink key={`link-${index}`} {...item} />
          ))}
      </div>

      <MobileMenu />
    </header>
  );
};

const NavLink = ({ link, linkLabel }: { link: string; linkLabel: string }) => {
  return (
    <a className="text-dark text-lg" href={link}>
      {linkLabel}
    </a>
  );
};
