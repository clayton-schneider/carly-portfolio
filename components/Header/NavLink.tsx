import Link from "next/link";

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
    <Link href={link ? `/${link}` : "/404"}>
      <span className={className + " cursor-pointer"}>
        {linkText ? linkText : "Link Text"}
      </span>
    </Link>
  );
};
