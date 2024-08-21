"use client";
import { Select, SelectItem } from "@nextui-org/select";

export const items = [
  { key: "모든 타입", label: "모든 타입" },
  { key: "legacy", label: "Legacy" },
  { key: "version1", label: "Version1" },
  { key: "version2", label: "Version2" },
  { key: "version3", label: "Version3" },
];

export default function CustomSelect() {
  return (
    <div className="w-52">
      <Select
        label="모든 타입"
        className="max-w-xs"
        classNames={{
          trigger:
            "bg-white border-medium border-default-200 data-[focus-visible=true]:outline-0 data-[focus-visible=true]:border-codeit_purple data-[focus-visible=true]:outline-offset-0 data-[hover=true]:bg-white data-[open=true]:border-codeit_purple data-[open=true]:rounded-b-none transition-all duration-150 rounded-md",
          label:
            "group-data-[filled=true]:scale-100 group-data-[filled=true]:translate-y-0 text-semibold text-default-500 group-data-[has-value=true]:hidden",
          innerWrapper:
            "hidden group-data-[has-value=true]:flex group-data-[has-label=true]:p-0",
          selectorIcon: "ease-in-out duration-250 w-5 h-5",
          popoverContent: "rounded-md rounded-t-none p-0",
          listboxWrapper: "p-0",
          listbox: "p-0",
        }}
        popoverProps={{ offset: 1 }}
      >
        {items.map((item) => (
          <SelectItem
            key={item.key}
            className="text-semibold data-[selectable=true]:focus:text-bold rounded-none border-b border-default-300 p-4 text-default-500 shadow-none last:border-none data-[hover=true]:bg-white data-[hover=true]:text-default-700 data-[selectable=true]:focus:bg-white"
          >
            {item.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
