import CommonButton from "@/components/common/CommonButton";
import { CommonProps } from "@/components/header/LoginButton";
import { cn } from "@/lib/utils";

export default function DownloadButton({ className }: CommonProps) {
  return (
    <CommonButton
      className={cn("rounded-lg bg-black text-sm text-white", className)}
    >
      Download
    </CommonButton>
  );
}
