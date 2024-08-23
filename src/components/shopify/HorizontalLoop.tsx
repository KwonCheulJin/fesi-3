import LoopItem from "@/components/shopify/LoopItem";

export default function HorizontalLoop() {
  return (
    <section className="gap-y-2xl grid-cols-full bg-section-light-bg grid select-none bg-gradient-to-r from-[#e9f9f4] via-[#cfebfe] via-[45.31%] to-[#f2eefe] py-0 text-black">
      <ul className="animate-horizontal-loop flex h-20 w-full items-center whitespace-nowrap motion-reduce:animate-none">
        {[...Array(20)].map((_, i) => (
          <LoopItem key={`loop-${i}`} />
        ))}
      </ul>
    </section>
  );
}
