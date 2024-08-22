import IPhoneImage from "@/components/common/IPhoneImage";
import FeaturesCards from "@/components/features/FeaturesCards";

export default function FeaturesContents() {
  return (
    <div className="mx-auto hidden max-w-7xl px-4 sm:px-6 md:mt-20 md:block lg:px-8">
      <div className="flex justify-between">
        <div className="relative">
          <IPhoneImage />
        </div>
        <FeaturesCards />
      </div>
    </div>
  );
}
