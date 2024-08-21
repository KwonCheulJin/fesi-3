import CommonButton from "@/components/common/CommonButton";
import { Input } from "@headlessui/react";

export default function FooterBottom() {
  return (
    <div className="flex w-full items-center justify-between border-t border-gray-300 pb-12 pt-6">
      <p className="text-sm font-light text-gray-500">
        &copy; Copyright {new Date().getFullYear()}. All rights reserved.
      </p>
      <div className="flex gap-3">
        <Input
          placeholder="Email address"
          className="rounded-md border border-gray-300 bg-white px-2 py-1 outline-none placeholder:text-xs placeholder:font-light focus:border-cyan-400"
        />
        <CommonButton className="rounded-lg bg-cyan-500 text-xs font-bold text-white hover:bg-cyan-500/90">
          Join our newsletter
        </CommonButton>
      </div>
    </div>
  );
}
