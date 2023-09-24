describe("Searchbox Test", { testIsolation: false }, () => {
  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit("http://zero.webappsecurity.com/index.html");
  });

  it("Should type into searchbox and submit", () => {
    cy.get("#searchTerm").type("online {enter}");
  });

  it("Should show search result page", () => {
    // Assert that word "online" got sent into GET request at the URL
    cy.url().should("include", "/search.html?searchTerm=online");

    cy.get("h2").should("contain.text", "Search Results");

    // Assert that word "online" must got the result
    cy.contains("The following pages were found").should("exist");

    cy.get("ul li a").should(($links) => {
      // Check that it will return 2 links
      expect($links).to.have.length(2);

      // Assert the URLs of the links
      expect($links.eq(0)).to.have.attr("href", "/online-banking.html");
      expect($links.eq(1)).to.have.attr("href", "/bank/online-statements.html");
    });

    // Assert the text of the links
    cy.get("ul li a").should("contain.text", "Zero - Free Access to Online Banking");
    cy.get("ul li a").should("contain.text", "Zero - Online Statements");
  });
});
