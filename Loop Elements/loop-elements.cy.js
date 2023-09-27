describe("Product Catalog Test Cases for Standard User", { testIsolation: false }, () => {
  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit("https://www.saucedemo.com");

    // Check that it is indeed a saucedemo.com website.
    cy.url().should("include", "https://www.saucedemo.com");
    cy.title().should("include", "Swag Labs");

    // Login with valid credentials
    cy.login_sauce("standard_user", "secret_sauce");

    // Error message should not exist upon successful login
    cy.get(".error-message-container").should("not.exist");

    // Custom command for checking successful login
    cy.check_login("success");
  });

  it("Should display some items inside inventory_item", () => {
    // Check that at least one product is displayed
    cy.get(".inventory_item").should("exist");

    cy.get(".inventory_list .inventory_item").each(($item) => {
      // Within each inventory item, assert it's visibility
      cy.wrap($item).within(() => {
        cy.get(".inventory_item_img").should("be.visible");
        cy.get(".inventory_item_description").should("be.visible");
      });
    });
  });

  it("Should display some items and some it's children inside inventory_item", () => {
    cy.get(".inventory_list .inventory_item").each(($item) => {
      // Find and assert the visibility of elements inside each $item
      cy.wrap($item).within(() => {
        cy.get(".inventory_item_img").should("be.visible");
        cy.get(".inventory_item_description .inventory_item_name").should("be.visible");
        cy.get(".inventory_item_description .inventory_item_desc").should("be.visible");
        cy.get(".inventory_item_price").should("be.visible");
        cy.get(".btn_inventory").should("be.visible");
      });
    });
  });

  it("Should display all items inside inventory_item including it's children", () => {
    cy.get(".inventory_list .inventory_item").each(($item) => {
      // Find and assert the visibility of all elements inside each $item
      cy.wrap($item).find("*").should("be.visible");
    });
  });
});
