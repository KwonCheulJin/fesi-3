import FooterBottom from "@/components/footer/FooterBottom";
import FooterTop from "@/components/footer/FooterTop";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300">
      <div className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
}
