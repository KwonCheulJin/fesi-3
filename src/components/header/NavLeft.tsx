"use client";
import ChevronIcon from "@/components/header/ChevronIcon";
import DownloadButton from "@/components/header/DownloadButton";
import HamburgerIcon from "@/components/header/HamburgerIcon";
import LoginButton from "@/components/header/LoginButton";
import MobileMenu from "@/components/header/MobileMenu";
import { PopoverButton } from "@headlessui/react";
import { useState } from "react";

export default function NavLeft() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="hidden lg:flex lg:justify-between lg:gap-6">
        <LoginButton />
        <DownloadButton />
      </div>
      <PopoverButton
        className="rounded-lg stroke-gray-900 p-2 outline-none hover:bg-zinc-100 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronIcon /> : <HamburgerIcon />}
      </PopoverButton>
      <MobileMenu />
    </>
  );
}
