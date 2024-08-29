import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import MyInput from "./MyInput";

describe("MyInput", () => {
  it("should render correctly", () => {
    // MyInput 컴포넌트를 렌더링합니다.
    const wrapper = render(<MyInput label="test input" />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should clear the value and onClear is triggered", async () => {
    const onClear = jest.fn();

    const ref = React.createRef<HTMLInputElement>();

    const { getByRole } = render(
      <MyInput
        ref={ref}
        isClearable
        defaultValue="junior@nextui.org"
        label="test input"
        onClear={onClear}
      />,
    );

    const clearButton = getByRole("button");

    expect(clearButton).not.toBeNull();

    const user = userEvent.setup();

    await user.click(clearButton);

    expect(ref.current?.value)?.toBe("");

    expect(onClear).toHaveBeenCalledTimes(1);
  });
});
