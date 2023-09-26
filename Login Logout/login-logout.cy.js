describe("Authentication test with invalid and valid data", () => {
  it("Should unable to login with invalid data", () => {
    // get variable from zero.json file
    cy.fixture("zero").then((zero) => {
      const username = zero.inv_username;
      const password = zero.inv_password;

      // Calling custom command
      cy.login(username, password);

      // Should display error message
      cy.get(".alert-error").should("be.visible").and("contain.text", "Login and/or password are wrong.");

      // It shouldn't go to the dashboard page upon unsuccessful login
      cy.url().should("not.include", "/bank/account-summary.html");
    });
  });

  it("Should able to login with valid data", () => {
    // get variable from zero.json file
    cy.fixture("zero").then((zero) => {
      const username = zero.username;
      const password = zero.password;

      // Calling custom command
      cy.login(username, password);

      // Check if the URL changes to the dashboard page upon successful login
      cy.url().should("include", "/bank/account-summary.html");

      // Check if it's truly on Account Summary page
      cy.get("h2").should("contain.text", "Cash Accounts");

      // Should able to logout after being able to logged in
      cy.contains("username").click();
      cy.get("#logout_link").click();

      // Assert that it's already logged out
      cy.url().should("include", "/index.html");
      cy.get("#signin_button")
        .should("exist") // Assert that the signin button exists
        .should("be.visible"); // Assert that the button is visible on the page
    });
  });
});
