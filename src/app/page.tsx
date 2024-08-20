import BackGroundGradientText from "@/components/BackGroundGradientText";
import GradientText from "@/components/GradientText";
import Icon from "@/components/Icon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white p-24 text-black">
      <div className="flex flex-col gap-6">
        <Icon />
        <BackGroundGradientText />
        <GradientText />
      </div>
    </main>
  );
}
