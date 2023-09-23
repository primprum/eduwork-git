describe("Working with inputs", { testIsolation: false }, () => {
  it("Assert the correct website", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");
  });

  it("Assert the Login field is filled", () => {
    const username = "username";
    cy.get('input[name="user_login"]').clear().type(username);

    // Assert that the input field is filled with username
    cy.get('input[name="user_login"]').should("have.value", username);
  });

  it("Assert the Password field is filled", () => {
    const password = "password";
    cy.get('input[name="user_password"]').clear().type(password);

    // Assert that the input field is filled with password
    cy.get('input[name="user_password"]').should("have.value", password);
  });

  it("Assert the checkbox is ticked", () => {
    // Check the checkbox
    cy.get('input[name="user_remember_me"]').check();

    // Assert that the checkbox is checked
    cy.get('input[name="user_remember_me"]').should("be.checked");
  });
});
