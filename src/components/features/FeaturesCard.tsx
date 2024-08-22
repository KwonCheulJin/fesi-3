import CommonButton from "@/components/common/CommonButton";
import { PropsWithChildren } from "react";

type FeaturesCardProps = {
  title: string;
  description: string;
  isClicked: boolean;
  onClick: () => void;
} & PropsWithChildren;
export default function FeaturesCard({
  title,
  description,
  children,
  isClicked,
  onClick,
}: FeaturesCardProps) {
  return (
    <CommonButton
      className={`rounded-xl px-[30px] pb-9 pt-[32px] ${isClicked ? "bg-[#262626] hover:bg-[#262626]" : "bg-transparent hover:bg-gray-800/30"} max-w-[560px] text-left`}
      onClick={onClick}
    >
      <div>{children}</div>
      <h2 className="mt-6 text-lg font-semibold text-white">{title}</h2>
      <p className="mt-2 text-sm text-gray-400">{description}</p>
    </CommonButton>
  );
}
