import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import user from "../../fixtures/userData.json";
import loginPage from "../../e2e/pages/loginPage";
import lumaHomePage from "../../e2e/pages/lumaHomePage";
import myAccountPage from "../../e2e/pages/myAccountPage";
import productPage from "../../e2e/pages/productPage";

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
});

And('clicks the "Proceed to Checkout" button', () => {
  productPage.proceedToCheckout();
});
Then(
  "the billing and shipping information should be displayed correctly and can be edited if necessary",
  () => {}
);
Then("the user selects a shipping method", () => {});
Then("the user goes to the next page and selects a payment method", () => {});
And("the order total should be correctly calculated and displayed", () => {});
Then('the user clicks the "Place Order" button', () => {});
And("an order confirmation page should be displayed", () => {});
And("the order number, date, and order total should be correctly displayed", () => {});
And(
  "the order details, such as the products, billing and shipping information, and payment method are correctly displayed",
  () => {}
);
