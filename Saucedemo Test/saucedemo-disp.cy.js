describe("Product Display Test", { testIsolation: false }, () => {
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

  it("Should display product list on the catalog page", () => {
    // Check that at least one product is displayed
    cy.get(".inventory_item").should("exist");

    // Assert image and description are displayed on the page
    cy.get(".inventory_list .inventory_item").each(($item) => {
      // Within each inventory item, assert on the elements
      cy.wrap($item).within(() => {
        cy.get(".inventory_item_img").should("be.visible");
        cy.get(".inventory_item_description").should("be.visible");
      });
    });
  });

  it("Should display product details when clicking each product image", () => {
    cy.get(".inventory_item_img").then(($items) => {
      for (let i = 0; i <= $items.length - 1; i++) {
        // Click product image
        cy.get(".inventory_item_img").eq(i).click();
        cy.url().should("include", "/inventory-item.html");

        // Asserting elements
        cy.get(".inventory_details_img").should("be.visible");
        cy.get(".inventory_details_name").should("be.visible");
        cy.get(".inventory_details_desc").should("be.visible");
        cy.get(".inventory_details_price").should("be.visible");
        cy.get(".btn_primary").should("be.visible");

        cy.get("#back-to-products").click();
      }
    });
  });

  it("Should display product details when clicking each product label", () => {
    cy.get(".inventory_item_name").then(($items) => {
      // cy.log($items.length); // use this to check how many items the element have
      for (let i = 0; i <= $items.length - 1; i++) {
        // Click product label
        cy.get(".inventory_item_name").eq(i).click();
        cy.url().should("include", "/inventory-item.html");

        // Asserting elements
        cy.get(".inventory_details_img").should("be.visible");
        cy.get(".inventory_details_name").should("be.visible");
        cy.get(".inventory_details_desc").should("be.visible");
        cy.get(".inventory_details_price").should("be.visible");
        cy.get(".btn_primary").should("be.visible");

        cy.get("#back-to-products").click();
      }
    });
  });
});
