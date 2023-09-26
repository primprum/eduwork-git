describe("Navbar content test", () => {
  beforeEach(() => {
    cy.visit("http://zero.webappsecurity.com/index.html");
  });

  it("Should display online banking content", () => {
    cy.get("#onlineBankingMenu").click();
    cy.url().should("include", "online-banking.html");
    cy.get("h1").contains("Online Banking").should("be.visible");
  });

  it("Should display feedback content", () => {
    cy.get("#feedback").click();
    cy.url().should("include", "feedback.html");
    cy.get("#feedback-title").contains("Feedback").should("be.visible");
  });

  it("Should display homepage content from 'Zero Bank' link", () => {
    cy.get("a").contains("Zero Bank").click();
    cy.url().should("include", "index.html");
    cy.get("strong").contains("Home").should("be.visible");
  });

  it("Should display homepage content from 'Home' link", () => {
    cy.get("strong").contains("Home").click();
    cy.url().should("include", "index.html");
    cy.get("strong").contains("Home").should("be.visible");
  });

  it("Should display searchbox content", () => {
    cy.get("#searchTerm").should("be.visible");
  });

  it("Should display signin button", () => {
    cy.get("#signin_button").should("be.visible");
  });
});
