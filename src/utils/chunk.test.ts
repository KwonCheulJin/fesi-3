import chunk from "@/utils/chunk";

describe("chunk", () => {
  const array = ["a", "b", "c", "d"];
  it("사이즈를 전달하지 않으면 기본 사이즈 1로 배열을 나눠서 반환한다.", () => {
    expect(chunk(array)).toEqual([["a"], ["b"], ["c"], ["d"]]);
  });

  it("사이즈가 배열의 길이보다 크면 배열을 한번에 반환한다.", () => {
    expect(chunk(array, 5)).toEqual([["a", "b", "c", "d"]]);
  });

  it("사이즈가 배열의 길이와 같으면 배열을 한번에 반환한다.", () => {
    expect(chunk(array, 4)).toEqual([["a", "b", "c", "d"]]);
  });

  it("사이즈가 배열의 길이보다 작으면 배열을 나눠서 반환한다.", () => {
    expect(chunk(array, 2)).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  it("사이즈가 배열의 길이보다 작으면 배열을 나눠서 반환한다.", () => {
    expect(chunk(array, 3)).toEqual([["a", "b", "c"], ["d"]]);
  });

  it("사이즈가 음수이면 빈 배열을 반환한다.", () => {
    expect(chunk(array, -1)).toEqual([]);
  });

  it("사이즈가 0이면 빈 배열을 반환한다.", () => {
    expect(chunk(array, 0)).toEqual([]);
  });

  it("빈 배열을 주입하면 빈 배열을 반환한다.", () => {
    expect(chunk([])).toEqual([]);
  });

  it("빈 배열을 주입하면 빈 배열을 반환한다.", () => {
    expect(chunk(array, array.length / 3)).toEqual([["a"], ["b"], ["c", "d"]]);
  });
});
