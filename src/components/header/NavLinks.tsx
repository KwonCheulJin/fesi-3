import NavLink from "@/components/header/NavLink";

type Path = {
  id: string;
  path: string;
};
const navItems: Array<Path> = [
  {
    id: "features",
    path: "features",
  },
  {
    id: "reviews",
    path: "reviews",
  },
  {
    id: "pricing",
    path: "pricing",
  },
  {
    id: "faqs",
    path: "faqs",
  },
];

type NavLinksProps = {
  className?: string;
};

export default function NavLinks({ className }: NavLinksProps) {
  return (
    <ul className={className}>
      {navItems.map((item) => (
        <li key={item.id}>
          <NavLink target={item.path} />
        </li>
      ))}
    </ul>
  );
}
