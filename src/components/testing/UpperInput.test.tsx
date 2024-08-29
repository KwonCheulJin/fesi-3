import UpperInput from "@/components/testing/UpperInput";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("UpperInput", () => {
  test("인풋이 렌더링되어야 한다.", () => {
    render(<UpperInput />);

    const label = screen.getByLabelText(/upper/i);
    const input = screen.getByRole("textbox");
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
  test("인풋에 소문자로 입력을 하면 값이 대문자로 변경되어야 한다.", async () => {
    render(<UpperInput />);

    const input = screen.getByRole("textbox");

    await userEvent.type(input, "stuff");
    expect(input).toHaveValue("STUFF");
  });
});
