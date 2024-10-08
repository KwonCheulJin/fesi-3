import { CourseType } from "@/models/course";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

export const courseTypeLabels: { [key in CourseType]: string } = {
  LEGACY: "Legacy",
  V1: "Version 1",
  V2: "Version 2",
  V3: "Version 3",
};

type Selectable = {
  key: string;
  label: string;
};

type SelectBoxProps = {
  items: Selectable[];
  onSelect: (key: string) => void;
  initialItem: Selectable;
};

export default function SelectBox(props: SelectBoxProps) {
  const { items, onSelect, initialItem } = props;

  return (
    <Select
      onSelectionChange={(keys) => {
        const selectedKey = Array.from(keys as Set<React.Key>)[0] as string;
        onSelect(selectedKey);
      }}
      variant="bordered"
      defaultSelectedKeys={[initialItem.key]}
      classNames={{
        trigger: ["border", "min-h-12"],
      }}
      selectionMode="single"
      disallowEmptySelection
      data-testid="select-box"
    >
      {items.map((item) => (
        <SelectItem key={item.key} showDivider hideSelectedIcon>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
}
