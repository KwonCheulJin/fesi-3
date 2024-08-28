import delay from "@/utils/delay";
jest.useFakeTimers();

describe("delay", () => {
  test("지정된 시간이 지난 후에 함수를 호출해야 한다.", (done) => {
    const callback = jest.fn((text) => {
      try {
        expect(text).toBe("later");
        done(); // 비동기 작업이 완료되었음을 알림
      } catch (error) {
        done(error); // 에러가 발생하면 테스트를 실패로 처리
      }
    });

    delay(callback, 1000, "later");
    jest.advanceTimersByTime(1000);
  });
  test("콜백 함수가 지정된 시간 전에 호출되지 않아야 한다.", () => {
    const callback = jest.fn((text) => console.log(text));
    delay(callback, 1000, "before");
    jest.advanceTimersByTime(500);
    expect(callback).not.toHaveBeenCalled();
  });

  test("콜백 함수가 여러 번 호출되지 않아야 한다.", () => {
    const callback = jest.fn((text) => console.log(text));
    delay(callback, 1000, "once");
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("콜백 함수가 즉시 호출되지 않아야 한다.", () => {
    const callback = jest.fn((text) => console.log(text));
    delay(callback, 1000, "immediate");
    expect(callback).not.toHaveBeenCalled();
  });
});
