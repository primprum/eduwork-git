const URL = "http://zero.webappsecurity.com/login.html";
const USERNAME_INPUT = "input#user_login";
const PASSWORD_INPUT = "input#user_password";
const SUBMIT_BUTTON = "input[name='submit']";

class LoginPage {
  // Visit webpage
  static visit() {
    cy.visit(URL);
  }

  // Fill username
  static fillUsername(username) {
    cy.get(USERNAME_INPUT).type(username);
  }

  // Fill password
  static fillPassword(password) {
    cy.get(PASSWORD_INPUT).type(password);
  }

  // Submit form
  static submit() {
    cy.get(SUBMIT_BUTTON).click();
  }
}

export default LoginPage;
