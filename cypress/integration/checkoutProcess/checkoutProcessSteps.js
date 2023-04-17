import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import user from "../../fixtures/userData.json";
import loginPage from "../../e2e/pages/loginPage";
import lumaHomePage from "../../e2e/pages/lumaHomePage";
import myAccountPage from "../../e2e/pages/myAccountPage";
import productPage from "../../e2e/pages/productPage";
import shippingDataPage from "../../e2e/pages/shippingDataPage";

Given("the user is on the home page of Luma", () => {
  cy.visit("/");
});

And("the user logs in", () => {
  lumaHomePage.clickOnSignIn();
  loginPage.fillLoginForm(user.demoLogin, user.demoPassword);
  loginPage.confirmLogin();
});

When("the user adds a product to the cart", () => {
  lumaHomePage.choosingBag();
  productPage.addToCart();
});

And("clicks the cart icon to view the contents of the cart", () => {
  lumaHomePage.redirectToCart();
  cy.wait(300);
  //lumaHomePage.elements.proceedToCheckoutButton().should("be.visible");
});

And('clicks the "Proceed to Checkout" button', () => {
  //lumaHomePage.proceedToCheckout();
  cy.visit("/checkout/#shipping");
});
Then("the billing and shipping information should be displayed correctly and can be edited if necessary", () => {
  shippingDataPage.elements.shippingAddress().should("be.visible");
  //shippingDataPage.fillShippingForm();
});
Then("the user selects a shipping method", () => {
  shippingDataPage.choosingShippingMethod();
});
Then("the user goes to the next page and selects a payment method", () => {
  shippingDataPage.goingToTheNextPage();
});
And("the order total should be correctly calculated and displayed", () => {
  shippingDataPage.checkingTotalPrice();
});
Then('the user clicks the "Place Order" button', () => {
  shippingDataPage.clickingPlaceOrder();
});
And("an order confirmation page should be displayed", () => {
  shippingDataPage.elements.orderConfirmation().should("be.visible");
});
And(
  "the order details, such as the products, billing and shipping information, and payment method are correctly displayed",
  () => {
    shippingDataPage.elements.orderConfirmedShippingAddress().should("have.text", "Jan Kowalski");
  }
);
