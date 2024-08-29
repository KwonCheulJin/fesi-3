"use client";
import React from "react";

export default function UpperInput() {
  const [upper, setUpper] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUpper(e.currentTarget.value.toUpperCase());
  return (
    <div className="flex gap-3">
      <label htmlFor="upper">Upper</label>
      <input
        id="upper"
        value={upper}
        onChange={handleChange}
        className="rounded-md border-2 border-black px-2 focus:border-purple-500 focus:outline-none"
      />
    </div>
  );
}
