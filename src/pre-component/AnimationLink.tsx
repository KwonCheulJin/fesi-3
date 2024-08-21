import RightArrow from "@/pre-component/RightArrow";
import Link from "next/link";

export default function AnimationLink() {
  return (
    <Link href="" className="group flex items-center gap-2">
      <p className="underline">Theme Store</p>
      <RightArrow className="h-4 w-4 -translate-x-2 opacity-0 transition-all delay-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  );
}
