import Login from "@/components/testing/Login";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Login", () => {
  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test("로그인 폼이 랜더링 되어야 한다.", () => {
    render(<Login />);

    const userInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(userInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test("사용자가 입력한 값으로 로그인을 성공한다.", async () => {
    mockedAxios.post.mockResolvedValueOnce({
      data: { token: "fake-token" },
    });

    render(<Login />);

    const userInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const button = screen.getByRole("button", { name: /submit/i });

    await userEvent.type(userInput, "junior");
    await userEvent.type(passwordInput, "password");
    await userEvent.click(button);

    expect(screen.getByText(/congrats/i)).toBeInTheDocument();
    expect(localStorage.getItem("token")).toBe("fake-token");
  });

  test("사용자가 입력한 값으로 로그인을 실패한다.", async () => {
    mockedAxios.post.mockRejectedValueOnce(new Error("Unauthorized"));

    render(<Login />);

    const userInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const button = screen.getByRole("button", { name: /submit/i });

    await userEvent.type(userInput, "junior");
    await userEvent.type(passwordInput, "password");
    await userEvent.click(button);

    expect(screen.getByRole("alert")).toHaveTextContent("Unauthorized");
    expect(localStorage.getItem("token")).toBeNull();
  });
});
