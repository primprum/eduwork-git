import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "./loginPage";

Given("I open login page", () => {
  LoginPage.visit();
  cy.url().should("include", "login.html");
});

// Title check
When("I check the title", () => {
  cy.title().should("exist");
});

Then("The title should display correct title", () => {
  cy.title().should("include", "Zero - Log in");
});

// Valid Login
When("I submit login", () => {
  LoginPage.fillUsername("username");
  LoginPage.fillPassword("password");
  LoginPage.submit();
});

Then("I should see homepage", () => {
  cy.get("#account_summary_tab").should("be.visible");
});

// Invalid Login
// Use parameter input from feature
When("I fill username with {string}", (username) => {
  LoginPage.fillUsername(username);
});

When("I fill password with {string}", (password) => {
  LoginPage.fillPassword(password);
});

When("I click on submit login", () => {
  LoginPage.submit();
});

Then("I would see error message", () => {
  cy.get(".alert.alert-error").should("be.visible");
});
