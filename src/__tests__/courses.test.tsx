import { customRender } from "@/__tests__/test-helper.test";
import Home from "@/app/courses/page";
import { courses } from "@/fixtures/courses";
import { screen, waitFor } from "@testing-library/dom";
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
});
