import NavLeft from "@/components/header/NavLeft";
import NavRight from "@/components/header/NavRight";
import { Popover } from "@headlessui/react";

export default function NavBar() {
  return (
    <Popover className="relative">
      <header>
        <nav className="mx-auto flex max-w-7xl justify-between p-4 md:p-7 lg:p-8">
          <NavRight />
          <NavLeft />
        </nav>
      </header>
    </Popover>
  );
}
