import QRCode from "@/components/footer/QRCode";
import QRText from "@/components/footer/QRText";

export default function QRContainer() {
  return (
    <div className="flex items-center p-4">
      <QRCode />
      <QRText />
    </div>
  );
}
