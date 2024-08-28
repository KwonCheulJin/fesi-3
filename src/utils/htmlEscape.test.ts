import { escape, unescape } from "@/utils/htmlEscape";

describe("htmlEscape", () => {
  it("스크립트 태그를 전달하면 HTML 엔티티로 변환된 글자가 나타난다.", () => {
    expect(escape("<script></script>")).toBe("&lt;script&gt;&lt;/script&gt;");
  });

  it("HTML 엔티티를 전달하면 원래 글자가 나타난다.", () => {
    expect(unescape("&lt;script&gt;&lt;/script&gt;")).toBe("<script></script>");
  });

  it("특수문자를 전달하면 HTML 엔티티로 변환된 글자가 나타난다.", () => {
    expect(escape(`&"'`)).toBe("&amp;&quot;&#39;");
  });

  it("HTML 엔티티를 전달하면 원래 글자가 나타난다.", () => {
    expect(unescape("&amp;&quot;&#39;")).toBe(`&"'`);
  });

  it("escape 함수에 빈 문자열을 전달하면 빈 문자열이 반환된다.", () => {
    expect(escape("")).toBe("");
  });

  it("unescape 함수에 빈 문자열을 전달하면 빈 문자열이 반환된다.", () => {
    expect(unescape("")).toBe("");
  });
});
