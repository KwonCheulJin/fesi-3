import FAQsContentsGroup from "@/components/faqs/FAQsContentsGroup";
import FAQsDescription from "@/components/faqs/FAQsDescription";

export default function FAQs() {
  return (
    <section id="faqs" className="border-t border-gray-200 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FAQsDescription />
        <FAQsContentsGroup />
      </div>
    </section>
  );
}
