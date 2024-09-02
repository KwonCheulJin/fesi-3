import Home from "@/app/courses/page";
import { courses } from "@/fixtures/courses";
import { customRender } from "@/lib/test-helper";
import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
const server = setupServer(
  rest.get(
    "https://front-assignment.codeit.team/courses.json",
    (req, res, ctx) => {
      return res(ctx.json(courses));
    },
  ),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Courses Page", () => {
  test("화면이 렌더링 되면 모든 강의가 나타난다", async () => {
    customRender(<Home />);

    await waitFor(() => {
      const courseInfos = screen.getAllByTestId("course-info");
      expect(courseInfos).toHaveLength(7);
    });
  });

  test("셀렉트 박스에서 두번째 Legacy 필터를 사용하면 강의가 한개만 보인다.", async () => {
    customRender(<Home />);

    await waitFor(() => {
      const courseInfos = screen.getAllByTestId("course-info");
      expect(courseInfos).toHaveLength(7);
    });

    const select = screen.getByTestId("select-box");

    await userEvent.click(select);

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(5);

    await userEvent.click(options[1]);

    await waitFor(() => {
      const courseInfos = screen.getAllByTestId("course-info");
      expect(courseInfos).toHaveLength(1);
    });
  });

  test("파이썬으로 강의를 검색하면 강의는 두개가 보인다.", async () => {
    customRender(<Home />);

    await waitFor(() => {
      const courseInfos = screen.getAllByTestId("course-info");
      expect(courseInfos).toHaveLength(7);
    });

    const input = screen.getByTestId("search-input");
    const searchButton = screen.getByRole("button", { name: "검색" });
    await userEvent.type(input, "파이썬");
    await userEvent.click(searchButton);

    await waitFor(() => {
      const courseInfos = screen.getAllByTestId("course-info");
      expect(courseInfos).toHaveLength(2);
    });
  });

  test("엘릭서로 강의를 검색하면 강의는 보이지 않는다.", async () => {
    customRender(<Home />);

    await waitFor(() => {
      const courseInfos = screen.getAllByTestId("course-info");
      expect(courseInfos).toHaveLength(7);
    });

    const input = screen.getByTestId("search-input");
    const searchButton = screen.getByRole("button", { name: "검색" });
    await userEvent.type(input, "엘릭서");
    await userEvent.click(searchButton);

    expect(screen.queryByTestId("course-info")).not.toBeInTheDocument();
  });
});
