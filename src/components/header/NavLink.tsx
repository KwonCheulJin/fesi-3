"use client";
import Link from "next/link";

type NavLinkProps = {
  target: string;
};

export default function NavLink({ target }: NavLinkProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Link
      href={`#${target}`}
      className="rounded-lg p-2 hover:bg-zinc-100"
      onClick={handleScroll}
    >
      {target}
    </Link>
  );
}
