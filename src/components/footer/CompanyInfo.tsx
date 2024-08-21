import FooterIcon from "@/components/footer/FooterIcon";

export default function CompanyInfo() {
  return (
    <div className="flex">
      <FooterIcon />
      <div className="ml-4 flex flex-col">
        <p className="font-semibold">Pocket</p>
        <p className="text-sm font-light">Invest at the perfect time.</p>
      </div>
    </div>
  );
}
