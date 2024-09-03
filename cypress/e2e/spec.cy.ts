describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("'~로 시작하기' 텍스트가 포함되어야 합니다.", () => {
    cy.get("p").should("contain", "Get started by");
  });
  it("올바른 href 속성을 가진 “Docs” 제목 앵커를 포함해야 합니다.", () => {
    cy.get("#docs")
      .should("have.attr", "href")
      .and(
        "include",
        "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
      );
    cy.get(
      'a[href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"]',
    )
      .should("exist")
      .within(() => {
        // h2 요소가 포함되어 있는지 확인
        cy.get("h2").should("exist").and("contain.text", "Docs");
      });
  });
});
