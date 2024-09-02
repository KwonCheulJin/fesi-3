import { Button, Input } from "@nextui-org/react";
import React from "react";

type SearchInputProps = {
  onSearch: (query: string) => void;
};

export default function SearchInput(props: SearchInputProps) {
  const { onSearch } = props;
  const [value, setValue] = React.useState("");
  return (
    <div className="flex flex-row gap-3">
      <div className="grow sm:grow-0 sm:basis-3/5">
        <Input
          variant="bordered"
          type="text"
          placeholder="강의 이름, 언어, 코스 소개로 검색하세요."
          value={value}
          onValueChange={setValue}
          classNames={{
            inputWrapper: ["border", "rounded-md", "min-h-12", "w-full"],
          }}
          data-testid="search-input"
        />
      </div>
      <Button
        className="min-h-12 rounded-md"
        color="primary"
        onClick={() => onSearch(value.trim())}
      >
        검색
      </Button>
    </div>
  );
}
