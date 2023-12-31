describe("Sort Product Test", { testIsolation: false }, () => {
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

  it("Should sort product list in ascending alphabetical order", () => {
    // Select based on text, instead of value
    cy.xpath("//select[@class='product_sort_container']").select("Name (A to Z)");

    let productNames = []; // Initialize an empty array to store product names

    cy.get(".inventory_item_name").each(($item) => {
      const itemName = $item.text();
      productNames.push(itemName); // Push the product name to the array
    });

    cy.wrap(productNames).then(($array) => {
      // Check if the array is sorted alphabetically
      cy.wrap($array).should("deep.eq", $array.slice().sort());
    });
  });

  it("Should sort product list in descending alphabetical order", () => {
    // Select based on text, instead of value
    cy.xpath("//select[@class='product_sort_container']").select("Name (Z to A)");

    let productNames = []; // Initialize an empty array to store product names

    cy.get(".inventory_item_name").each(($item) => {
      const itemName = $item.text();
      productNames.push(itemName); // Push the product name to the array
    });

    cy.wrap(productNames).then(($array) => {
      // Check if the array is sorted alphabetically in descending order
      cy.wrap($array).should("deep.eq", $array.slice().sort().reverse());
    });
  });

  it("Should sort product list from low price to high price", () => {
    // Select based on text, instead of value
    cy.xpath("//select[@class='product_sort_container']").select("Price (low to high)");

    let productPrices = []; // Initialize an empty array to store product prices

    cy.get(".inventory_item_price").each(($item) => {
      const itemText = $item.text();

      // Remove the '$' sign and convert to a floating-point number
      const price = parseFloat(itemText.replace("$", ""));

      productPrices.push(price); // Push the price to the array
    });
    cy.wrap(productPrices).then(($array) => {
      // Check if the array is sorted in ascending order
      cy.wrap($array).should(
        "deep.eq",
        $array.slice().sort((a, b) => a - b) // a - b to assert ascending
      );
    });
  });

  it("Should sort product list from high price to low price", () => {
    // Select based on text, instead of value
    cy.xpath("//select[@class='product_sort_container']").select("Price (high to low)");

    let productPrices = []; // Initialize an empty array to store product prices

    cy.get(".inventory_item_price").each(($item) => {
      const itemText = $item.text();

      // Remove the '$' sign and convert to a floating-point number
      const price = parseFloat(itemText.replace("$", ""));

      productPrices.push(price); // Push the price to the array
    });
    cy.wrap(productPrices).then(($array) => {
      // Check if the array is sorted in descending order
      cy.wrap($array).should(
        "deep.eq",
        $array.slice().sort((a, b) => b - a) // b - a to assert descending
      );
    });
  });
});
