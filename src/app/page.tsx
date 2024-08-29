import FAQs from "@/components/faqs/FAQs";
import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";
import Reviews from "@/components/reviews/Reviews";
import HorizontalLoop from "@/components/shopify/HorizontalLoop";
import Testing from "@/components/testing/Testing";

export default function Home() {
  return (
    <main className="flex-auto">
      <Testing />
      <Hero />
      <Features />
      <Reviews />
      <HorizontalLoop />
      <FAQs />
    </main>
  );
}
