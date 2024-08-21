import NavLink from "@/components/header/NavLink";

type Path = {
  id: string;
  path: string;
};
const navItems: Array<Path> = [
  {
    id: "features",
    path: "Features",
  },
  {
    id: "reviews",
    path: "Reviews",
  },
  {
    id: "pricing",
    path: "Pricing",
  },
  {
    id: "faqs",
    path: "FAQs",
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
