import FAQs from "@/components/faqs/FAQs";
import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="flex-auto">
      <Hero />
      <Features />
      <FAQs />
    </main>
  );
}
