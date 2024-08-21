import AppStore from "@/components/hero/AppStore";
import VideoLink from "@/components/hero/VideoLink";

export default function HeroText() {
  return (
    <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
      <h1 className="text-4xl font-medium tracking-tight text-gray-900">
        Invest at the perfect time.
      </h1>
      <p className="mt-6 text-lg text-gray-600">
        By leveraging insights from our network of industry insiders, you’ll
        know exactly when to buy to maximize profit, and exactly when to sell to
        avoid painful losses.
      </p>
      <div className="mt-8 flex gap-6">
        <AppStore />
        <VideoLink />
      </div>
    </div>
  );
}
