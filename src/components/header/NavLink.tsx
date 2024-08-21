import Link from "next/link";

type NavLinkProps = {
  target: string;
};

export default function NavLink({ target }: NavLinkProps) {
  return (
    <Link href={`#${target}`} className="rounded-lg p-2 hover:bg-zinc-100">
      {target}
    </Link>
  );
}
