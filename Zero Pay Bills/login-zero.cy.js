describe("Make payments to the saved payees", () => {
  before(() => {
    // get variable from zero.json file
    cy.fixture("zero").then((zero) => {
      const username = zero.username;
      const password = zero.password;

      // Calling custom command
      cy.login(username, password);

      // Check if the URL changes to the dashboard page upon successful login
      cy.url().should("include", "/bank/account-summary.html");
    });
  });

  it("Should able to pay bills", () => {
    cy.get("#pay_bills_tab a").click();

    // Check if it's truly on "Pay Bills" tab
    cy.get("#pay_bills_tab").should("have.class", "active");

    // Check if it's truly on "Pay Saved Payee" tab
    cy.get("li.ui-state-default.ui-corner-top.ui-tabs-selected.ui-state-active").should("exist");

    cy.get("#sp_payee").select("Apple");
    cy.get("#sp_account").select("3");
    cy.get("#sp_amount").type("100");

    // Choosing date through UI datepicker
    cy.get("#sp_date").click();
    cy.contains("td", "28").click();

    cy.get("#sp_description").type("Monthly payment for Apple subscription");

    cy.get("#pay_saved_payees").click();

    // Check if the URL changes after "Pay" is clicked
    cy.url().should("include", "/bank/pay-bills-saved-payee.html");

    // Check for an alert content to confirm successful payment
    cy.get("#alert_content").invoke("text").should("include", "The payment was successfully submitted.");
  });
});
