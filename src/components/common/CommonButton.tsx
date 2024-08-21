import { cn } from "@/lib/utils";
import { Button } from "@headlessui/react";

type CommonButtonProps = {
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function CommonButton({
  className,
  children,
  onClick,
}: CommonButtonProps) {
  return (
    <Button className={cn("p-2", className)} onClick={onClick}>
      {children}
    </Button>
  );
}
