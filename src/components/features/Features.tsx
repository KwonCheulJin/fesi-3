import FeaturesContents from "@/components/features/FeaturesContents";
import FeaturesDescription from "@/components/features/FeaturesDescription";

export default function Features() {
  return (
    <section
      id="features"
      className="bg-[#171717] py-20 sm:py-32 lg:pb-32 xl:pb-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FeaturesDescription />
        <FeaturesContents />
      </div>
    </section>
  );
}
