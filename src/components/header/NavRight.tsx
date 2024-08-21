import HeaderIcon from "@/components/header/HeaderIcon";
import NavLinks from "@/components/header/NavLinks";

export default function NavRight() {
  return (
    <div className="flex items-center justify-between gap-[56px]">
      <HeaderIcon />
      <NavLinks className="hidden text-sm font-light lg:flex lg:items-center lg:gap-6" />
    </div>
  );
}
