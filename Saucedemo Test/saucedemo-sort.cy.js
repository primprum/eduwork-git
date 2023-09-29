describe("Sort Product Test Cases for Standard User", { testIsolation: false }, () => {
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

  // it("Should sort product list in ascending alphabetical order", () => {
  //   // code
  // });

  // it("Should sort product list in descending alphabetical order", () => {
  //   // code
  // });

  it("Should sort product list from low price to high price", () => {
    cy.get("[data-test=product_sort_container]").select("lohi");

    let myArray = []; // Initialize an empty array to store prices

    cy.get(".inventory_item_price").each(($item) => {
      const itemText = $item.text();

      // Remove the '$' sign and convert to a floating-point number
      const price = parseFloat(itemText.replace("$", ""));

      myArray.push(price); // Push the price to the array
    });
    cy.wrap(myArray).then(($array) => {
      // Check if the array is sorted in ascending order
      cy.wrap($array).should(
        "deep.eq",
        $array.slice().sort((a, b) => a - b) // a - b to assert ascending
      );
    });
  });

  it("Should sort product list from high price to low price", () => {
    cy.get("[data-test=product_sort_container]").select("hilo");

    let myArray = []; // Initialize an empty array to store prices

    cy.get(".inventory_item_price").each(($item) => {
      const itemText = $item.text();

      // Remove the '$' sign and convert to a floating-point number
      const price = parseFloat(itemText.replace("$", ""));

      myArray.push(price); // Push the price to the array
    });
    cy.wrap(myArray).then(($array) => {
      // Check if the array is sorted in descending order
      cy.wrap($array).should(
        "deep.eq",
        $array.slice().sort((a, b) => b - a) // b - a to assert descending
      );
    });
  });
});
