import Counter from "@/components/testing/Counter";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("정상적으로 랜더링 되어야한다.", () => {
    render(<Counter />);

    const text = screen.getByTestId("count");
    const button = screen.getByRole("button", { name: /increment/i });

    expect(button).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  test("버튼을 클릭하면 화면의 문구의 숫자가 변경된다.", async () => {
    render(<Counter />);

    const text = screen.getByTestId("count");
    const button = screen.getByRole("button", { name: /increment/i });

    expect(text).toHaveTextContent("Clicked 0 times");

    await userEvent.click(button);

    expect(text).toHaveTextContent("Clicked 1 time");
  });

  test("체크박스가 체크되어있지 않으면 브라우저 타이틀이 Pocket으로 표시된다.", async () => {
    render(<Counter />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();

    expect(document.title).toBe("");
  });

  test("버튼을 1회 클릭하고 체크박스를 체크하면 브라우저 타이틀이 변경되어야 합니다", async () => {
    render(<Counter />);

    const text = screen.getByTestId("count");
    const button = screen.getByRole("button", { name: /increment/i });
    const checkbox = screen.getByRole("checkbox");

    await userEvent.click(button);
    await userEvent.click(checkbox);

    expect(text).toHaveTextContent("Clicked 1 time");

    // 특정 동작 후에 타이틀이 변경될 때까지 기다립니다.
    await waitFor(() => {
      expect(document.title).toBe("Total number of clicks: 1");
    });
  });
});
