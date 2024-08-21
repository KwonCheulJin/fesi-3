import CompanyInfo from "@/components/footer/CompanyInfo";
import QRContainer from "@/components/footer/QRContainer";
import NavLinks from "@/components/header/NavLinks";

export default function FooterTop() {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
      <div>
        <CompanyInfo />
        <NavLinks className="mt-11 flex gap-3 text-sm font-light" />
      </div>
      <QRContainer />
    </div>
  );
}
