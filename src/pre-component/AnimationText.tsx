import RightArrow from "@/pre-component/RightArrow";
export default function AnimationText() {
  return (
    <div className="group flex cursor-pointer items-center justify-between border-b border-black pb-5">
      <div className="flex items-center">
        <RightArrow className="mr-2 h-6 w-6 -translate-x-full opacity-0 transition-all delay-500 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
        <p className="-translate-x-8 text-lg font-semibold transition-all delay-500 ease-out group-hover:translate-x-0">
          Seize every sale
        </p>
      </div>
      <RightArrow className="h-6 w-6 transition-all delay-500 ease-out group-hover:translate-x-6 group-hover:opacity-0" />
    </div>
  );
}
