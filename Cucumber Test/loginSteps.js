const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("I open login page", () => {
  cy.visit("http://zero.webappsecurity.com/login.html");
});

When("I submit login", () => {
  cy.get("input#user_login").type("username");
  cy.get("input#user_password").type("password");
  cy.get('input[name="submit"]').click();
});

Then("I should see homepage", () => {
  cy.get("#account_summary_tab").should("be.visible");
});
