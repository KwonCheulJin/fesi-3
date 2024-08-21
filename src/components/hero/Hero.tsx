import CompanyImages from "@/components/hero/CompanyImages";
import HeroImage from "@/components/hero/HeroImage";
import HeroText from "@/components/hero/HeroText";

export default function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <HeroText />
          <HeroImage />
          <CompanyImages />
        </div>
      </div>
    </div>
  );
}
