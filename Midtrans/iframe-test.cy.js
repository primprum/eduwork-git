describe("Using iframe Test", () => {
  it("Order something with GoPay", () => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit("https://demo.midtrans.com");
    cy.get("a.btn.buy").contains("BUY NOW").click();

    cy.get(".cart-checkout").contains("CHECKOUT").click();

    cy.iframe().find('img[alt="GoPay"]').click();
    cy.iframe().find("button.btn.full.primary.btn-theme").contains("Back to merchant").click();
  });
});
