describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.get("h3").should("contain", "Get started by");
    cy.get("a").should("contain", "Docs");
  });
});
