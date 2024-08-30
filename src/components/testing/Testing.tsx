"use client";
import Counter from "@/components/testing/Counter";
import Login from "@/components/testing/Login";
import MyInput from "@/components/testing/MyInput";
import UpperInput from "@/components/testing/UpperInput";

export default function Testing() {
  return (
    <section
      id="features"
      className="bg-white py-20 sm:py-32 lg:pb-32 xl:pb-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <UpperInput />
        <MyInput
          isClearable
          type="email"
          label="Email"
          variant="bordered"
          placeholder="Enter your email"
          defaultValue="junior@nextui.org"
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        />
        <Counter />
        <Login />
      </div>
    </section>
  );
}
