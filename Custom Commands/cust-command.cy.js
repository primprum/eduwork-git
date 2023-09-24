describe("Working with inputs", { testIsolation: false }, () => {
  it("Visit the website", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");
  });

  it("Should try to login", () => {
    // get variable from user.json file
    cy.fixture("user").then((user) => {
      const username = user.username;
      const password = user.password;

      // calling custom command
      cy.login(username, password);

      // it got assertion error, because "have.text" need an exact match
      // cy.get(".alert-error").should("have.text", "Login and/or password are wrong");

      // using invoke to ensure that it's clean and free of any extra characters that might cause assertion issues
      // rather than using "have-text", "include" doesn't need an exact match
      cy.get(".alert-error").invoke("text").should("include", "Login and/or password are wrong");
    });
  });
});
