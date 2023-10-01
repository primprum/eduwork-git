describe("Authentication Test", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit("https://www.saucedemo.com");

    // Check that it is indeed a saucedemo.com website.
    cy.url().should("include", "https://www.saucedemo.com");
    cy.title().should("include", "Swag Labs");
  });

  it("Should able to login with valid credentials", () => {
    cy.fixture("sauce").then((sauce) => {
      const username = sauce.standard;
      const password = sauce.password;

      // Calling custom command
      cy.login_sauce(username, password);

      // Error message should not exist upon successful login
      cy.get(".error-message-container").should("not.exist");

      // Custom command for checking successful login
      cy.check_login("success");
    });
  });

  it("Should able to logout after logged in", () => {
    cy.fixture("sauce").then((sauce) => {
      const username = sauce.standard;
      const password = sauce.password;

      // Calling custom command
      cy.login_sauce(username, password);

      // Error message should not exist upon successful login
      cy.get(".error-message-container").should("not.exist");

      // Custom command for checking successful login
      cy.check_login("success");

      // Trying to logout
      cy.get("#react-burger-menu-btn").click();
      cy.get("#logout_sidebar_link").click();

      // Check if it's already logged out
      cy.visit("https://www.saucedemo.com/inventory.html", { failOnStatusCode: false });
      cy.get(".error-message-container").should("be.visible");
      cy.get("h3").should("contain.text", "Epic sadface: You can only access '/inventory.html' when you are logged in");
    });
  });

  it("Should unable to login and display error message on invalid credentials", () => {
    cy.fixture("sauce").then((sauce) => {
      const username = sauce.invalid_user;
      const password = sauce.invalid_password;

      // Calling custom command
      cy.login_sauce(username, password);

      // Error message should exist upon unsuccessful login
      cy.get(".error-message-container").should("be.visible");
      cy.get("h3").should("contain.text", "Epic sadface: Username and password do not match any user in this service");

      // Custom command for asserting failed login
      cy.check_login("failed");
    });
  });

  it("Should unable to login and display error message on locked user", () => {
    cy.fixture("sauce").then((sauce) => {
      const username = sauce.locked;
      const password = sauce.password;

      // Calling custom command
      cy.login_sauce(username, password);

      // Error message should exist upon unsuccessful login
      cy.get(".error-message-container").should("be.visible");
      cy.get("h3").should("contain.text", "Epic sadface: Sorry, this user has been locked out");

      // Custom command for checking failed login
      cy.check_login("failed");
    });
  });

  it("Should unable to login and display error message on all empty input field", () => {
    // Custom command with empty parameters
    cy.login_sauce();

    // Error message should exist upon unsuccessful login
    cy.get(".error-message-container").should("be.visible");
    cy.get("h3").should("contain.text", "Epic sadface: Username is required");

    // Custom command for checking failed login
    cy.check_login("failed");
  });

  it("Should unable to login and display error message on empty Password input field", () => {
    // Custom command with empty password parameters
    cy.login_sauce("abcd", "");

    // Error message should exist upon unsuccessful login
    cy.get(".error-message-container").should("be.visible");
    cy.get("h3").should("contain.text", "Epic sadface: Password is required");

    // Custom command for checking failed login
    cy.check_login("failed");
  });

  it("Should unable to login and display error message on empty Username input field", () => {
    // Custom command with empty username parameters
    cy.login_sauce("", "abcd");

    // Error message should exist upon unsuccessful login
    cy.get(".error-message-container").should("be.visible");
    cy.get("h3").should("contain.text", "Epic sadface: Username is required");

    // Custom command for checking failed login
    cy.check_login("failed");
  });
});
