import shuffle from "./shuffle";

describe("shuffle", () => {
  test("배열의 요소를 무작위로 섞어 새로운 배열을 반환해야 한다.", () => {
    const array = [1, 2, 3, 4];
    const shuffledArray = shuffle(array);
    expect(shuffledArray).not.toEqual(array);
    expect(shuffledArray.sort()).toEqual(array);
  });

  test("원본 배열을 수정하지 않아야 한다.", () => {
    const array = [1, 2, 3, 4];
    const originalArray = [...array];
    shuffle(array);
    expect(array).toEqual(originalArray);
  });

  test("입력이 빈 배열인 경우 빈 배열을 반환해야 한다.", () => {
    expect(shuffle([])).toEqual([]);
  });

  test("요소가 하나인 배열을 처리해야 한다.", () => {
    expect(shuffle([1])).toEqual([1]);
  });
});
