import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User is on the homepage", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("http://zero.webappsecurity.com/index.html");
});

When('User enters "online" into the search box', () => {
  cy.get("#searchTerm").type("online", { testIsolation: false });
});

When("User presses Enter", () => {
  cy.get("#searchTerm").type("{enter}");
});

Then('User should see search results that include the keyword "online"', () => {
  // Assert that word "online" got sent into GET request at the URL
  cy.url().should("include", "/search.html?searchTerm=online");

  cy.get("h2").should("contain.text", "Search Results");

  // Assert that word "online" must got the result
  cy.contains("The following pages were found").should("exist");
});
