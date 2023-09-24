describe("Assert Login Authentication", () => {
  beforeEach(() => {
    cy.fixture("sauce").then((sauce) => {
      const title = sauce.title;
      cy.visit("https://www.saucedemo.com");
      cy.title().should("include", title);
    });
  });

  it("Should succeed to login", () => {
    cy.fixture("sauce").then((sauce) => {
      const standard_user = sauce.standard;
      const password = sauce.password;

      cy.get('input[name="user-name"]').clear().type(standard_user);
      cy.get('input[name="password"]').clear().type(password);

      cy.get('input[name="login-button"]').click();

      // Assuming there is an error message element for unsuccessful login
      cy.get(".error-message-container").should("not.exist");

      // Check if the URL changes to the dashboard page upon successful login
      cy.url().should("include", "/inventory.html");

      // Check for a dashboard element to confirm successful login
      cy.get(".inventory_container").should("be.visible");
    });
  });

  it("Should failed to login", () => {
    cy.fixture("sauce").then((sauce) => {
      const locked_out_user = sauce.locked;
      const password = sauce.password;

      cy.get('input[name="user-name"]').clear().type(locked_out_user);
      cy.get('input[name="password"]').clear().type(password);

      cy.get('input[name="login-button"]').click();

      // Assuming there is an error message element for unsuccessful login
      cy.get(".error-message-container").should("be.visible");

      // Check if the URL does not change upon failed login
      cy.url().should("not.include", "/inventory.html");

      // Check for the absence of a dashboard element to confirm failed login
      cy.get(".inventory_container").should("not.exist");
    });
  });
});
