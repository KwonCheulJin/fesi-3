import QRBaseSVG from "@/components/footer/QRBaseSVG";
import Image from "next/image";

export default function QRCode() {
  return (
    <div className="relative flex h-24 w-24 flex-none items-center justify-center">
      <QRBaseSVG />
      <Image width={80} height={80} src="/qr-code.svg" alt="qr-code" />
    </div>
  );
}
