const URL = "http://zero.webappsecurity.com/index.html";
const SEARCH_ID = "#searchTerm";

class SearchPage {
  static visit() {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(URL);
  }

  static fillSearchbox(keyword) {
    cy.get(SEARCH_ID).type(keyword, { testIsolation: false });
  }

  static submitSearchbox() {
    cy.get(SEARCH_ID).type("{enter}");
  }

  static assertSearchResult(keyword) {
    // Assert that the keyword got sent into the GET request at the URL
    cy.url().should("include", `/search.html?searchTerm=${keyword}`);

    cy.get("h2").should("contain.text", "Search Results");

    // Assert that the keyword must have produced results
    cy.contains("The following pages were found").should("exist");
  }
}

export default SearchPage;
