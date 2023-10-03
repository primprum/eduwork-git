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

// Login
When("I submit login", () => {
  LoginPage.fillUsername("username");
  LoginPage.fillPassword("password");
  LoginPage.submit();
});

Then("I should see homepage", () => {
  cy.get("#account_summary_tab").should("be.visible");
});
