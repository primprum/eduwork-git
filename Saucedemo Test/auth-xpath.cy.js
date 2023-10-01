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

      cy.xpath("//input[@data-test='username']").type(username);
      cy.xpath("//input[@data-test='password']").type(password);
      cy.xpath("//input[@data-test='login-button']").click();

      // Error message should not exist upon successful login
      cy.xpath("//div[@class='error-message-container error']").should("not.exist");

      // Custom command for checking successful login
      cy.check_login("success");
    });
  });

  it("Should able to logout after logged in", () => {
    cy.fixture("sauce").then((sauce) => {
      const username = sauce.standard;
      const password = sauce.password;

      cy.xpath("//input[@data-test='username']").type(username);
      cy.xpath("//input[@data-test='password']").type(password);
      cy.xpath("//input[@data-test='login-button']").click();

      // Error message should not exist upon successful login
      cy.xpath("//div[@class='error-message-container error']").should("not.exist");

      // Custom command for checking successful login
      cy.check_login("success");

      // Trying to logout
      cy.xpath("//button[@id='react-burger-menu-btn']").click();
      cy.xpath("//a[@id='logout_sidebar_link']").click();

      // Check if it's already logged out
      cy.visit("https://www.saucedemo.com/inventory.html", { failOnStatusCode: false });
      cy.xpath("//div[@class='error-message-container error']").should("be.visible");
      cy.xpath("//h3[contains(text(), 'Epic sadface: You can only access')]").should("exist");
    });
  });

  it("Should unable to login and display error message on invalid credentials", () => {
    cy.fixture("sauce").then((sauce) => {
      const username = sauce.invalid_user;
      const password = sauce.invalid_password;

      cy.xpath("//input[@data-test='username']").type(username);
      cy.xpath("//input[@data-test='password']").type(password);
      cy.xpath("//input[@data-test='login-button']").click();

      // Error message should exist upon unsuccessful login
      cy.xpath("//div[@class='error-message-container error']").should("be.visible");
      cy.xpath("//h3[contains(text(), 'Epic sadface: Username and password do not match')]").should("exist");

      // Custom command for asserting failed login
      cy.check_login("failed");
    });
  });

  it("Should unable to login and display error message on locked user", () => {
    cy.fixture("sauce").then((sauce) => {
      const username = sauce.locked;
      const password = sauce.password;

      cy.xpath("//input[@data-test='username']").type(username);
      cy.xpath("//input[@data-test='password']").type(password);
      cy.xpath("//input[@data-test='login-button']").click();

      // Error message should exist upon unsuccessful login
      cy.xpath("//div[@class='error-message-container error']").should("be.visible");
      cy.xpath("//h3[contains(text(), 'Epic sadface: Sorry, this user has been locked out')]").should("exist");

      // Custom command for checking failed login
      cy.check_login("failed");
    });
  });

  it("Should unable to login and display error message on all empty input field", () => {
    // Custom command with empty parameters
    cy.login_sauce();

    // Error message should exist upon unsuccessful login
    cy.xpath("//div[@class='error-message-container error']").should("be.visible");
    cy.xpath("//h3[contains(text(), 'Epic sadface: Username is required')]").should("exist");

    // Custom command for checking failed login
    cy.check_login("failed");
  });

  it("Should unable to login and display error message on empty Password input field", () => {
    // Custom command with empty password parameters
    cy.login_sauce("abcd", "");

    // Error message should exist upon unsuccessful login
    cy.xpath("//div[@class='error-message-container error']").should("be.visible");
    cy.xpath("//h3[contains(text(), 'Epic sadface: Password is required')]").should("exist");

    // Custom command for checking failed login
    cy.check_login("failed");
  });

  it("Should unable to login and display error message on empty Username input field", () => {
    // Custom command with empty username parameters
    cy.login_sauce("", "abcd");

    // Error message should exist upon unsuccessful login
    cy.xpath("//div[@class='error-message-container error']").should("be.visible");
    cy.xpath("//h3[contains(text(), 'Epic sadface: Username is required')]").should("exist");

    // Custom command for checking failed login
    cy.check_login("failed");
  });
});
