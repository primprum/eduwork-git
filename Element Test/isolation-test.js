describe("Browser actions", { testIsolation: false }, () => {
  it("Should load books website", () => {
    cy.visit("https://books.toscrape.com/index.html", { timeout: 10000 });
    cy.url().should("include", "index.html");
  });

  it("Should click on Travel Category", () => {
    // without testIsolation: false, this below will be failed
    cy.get("a").contains("Travel").click();
  });
});
