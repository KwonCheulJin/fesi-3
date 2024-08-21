"use client";
import DownloadButton from "@/components/header/DownloadButton";
import LoginButton from "@/components/header/LoginButton";
import NavLinks from "@/components/header/NavLinks";
import { PopoverPanel } from "@headlessui/react";

export default function MobileMenu() {
  return (
    <PopoverPanel
      transition
      anchor="bottom"
      className="z-50 flex w-full origin-top flex-col rounded-b-xl bg-[#FAFAFA] shadow-md transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
    >
      <div className="p-6">
        <NavLinks className="flex w-full flex-col gap-3 text-sm font-light" />
        <div className="mt-6 flex flex-col gap-3">
          <LoginButton className="w-full" />
          <DownloadButton className="w-full" />
        </div>
      </div>
    </PopoverPanel>
  );
}
