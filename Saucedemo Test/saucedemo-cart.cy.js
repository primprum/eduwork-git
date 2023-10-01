describe("Shopping Cart Test", { testIsolation: false }, () => {
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

  it("Should add an item to the cart when clicking 'Add to cart' button from product list", () => {
    // Click on the "Add to cart" button of the first product
    cy.get(".inventory_item")
      .first()
      .within(() => {
        cy.get(".btn_primary").click();
      });

    // Verify that the shopping cart icon updates to show the item count
    cy.get(".shopping_cart_badge").should("have.text", "1");

    // Visit the shopping cart
    cy.get(".shopping_cart_link").click();

    // Verify that the added product is in the shopping cart
    cy.get(".cart_item").should("have.length", 1);

    // Verify the product details in the cart
    cy.get(".cart_item")
      .first()
      .within(() => {
        cy.get(".cart_item_label").should("contain", "Sauce Labs Backpack");
        cy.get(".inventory_item_price").should("contain", "$29.99");
      });

    // Click 'Remove' button
    cy.get("#remove-sauce-labs-backpack").click();

    // Back to product list
    cy.get("#continue-shopping").click();
  });

  it("Should add an item to the cart when clicking 'Add to cart' button from product details", () => {
    // Go into product details
    cy.get(".inventory_item_img").first().click();
    cy.url().should("include", "/inventory-item.html");

    // Click 'Add to cart' button
    cy.get("#add-to-cart-sauce-labs-backpack").click();

    // Verify that the shopping cart icon updates to show the item count
    cy.get(".shopping_cart_badge").should("have.text", "1");

    // Click 'Remove' button
    cy.get("#remove-sauce-labs-backpack").click();

    // Verify that the shopping cart icon removes the item
    cy.get(".shopping_cart_badge").should("not.exist");

    // Back to product list
    cy.get("#back-to-products").click();
  });

  it("'Add to cart' button should add item and match with the quantity in shopping cart", () => {
    // Iterate through all 'Add to cart' button
    cy.get(".inventory_item .btn_primary").each(($button) => {
      cy.wrap($button).click(); // Click each button
    });

    // Get total of all item displayed
    cy.get(".inventory_item_name").then(($items) => {
      // Verify that the shopping cart icon updates to show the correct item count
      cy.get(".shopping_cart_badge").should("have.text", $items.length);
    });
  });

  it("'Remove' button should remove item in shopping cart", () => {
    // Go to shopping cart
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");

    // Iterate through all 'Remove' button
    cy.get(".btn_small").each(($remove) => {
      cy.wrap($remove).click(); // Click each button
    });

    // Assert all items has been removed
    cy.get(".cart_item").should("not.exist");
  });
});
