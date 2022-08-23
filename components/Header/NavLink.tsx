export const NavLink = ({
  link,
  linkText,
  className,
}: {
  link: string | null;
  linkText: string | null;
  className?: string | null;
}) => {
  return (
    <a className={className + " "} href={link ? link : "/404"}>
      {linkText ? linkText : "Link Text"}
    </a>
  );
};
