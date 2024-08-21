import CommonButton from "@/components/common/CommonButton";
import { cn } from "@/lib/utils";

export type CommonProps = {
  className?: string;
};
export default function LoginButton({ className }: CommonProps) {
  return (
    <CommonButton
      className={cn(
        "rounded-lg border border-zinc-300 text-sm font-light",
        className,
      )}
    >
      Log in
    </CommonButton>
  );
}
