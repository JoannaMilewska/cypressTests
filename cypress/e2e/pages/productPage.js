class productPage {
  elements = {
    addToCartButton: () => cy.get("#product-addtocart-button"),
    proceedToCheckoutButton: () => cy.contains("Proceed to Checkout"),
  };
  addToCart() {
    this.elements.addToCartButton().click();
  }
  proceedToCheckout() {
    this.elements.proceedToCheckoutButton().click({ force: true });
  }
}
export default new productPage();
