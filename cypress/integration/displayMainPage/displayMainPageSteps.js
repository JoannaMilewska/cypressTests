import { use } from "chai";
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import lumaHomePage from "../../e2e/pages/lumaHomePage";
import loginPage from "../../e2e/pages/loginPage";
import user from "../../fixtures/userData.json";

Given("the user is on the home page of Luma", () => {
  cy.visit("/");
});

And("the user logs in", () => {
  lumaHomePage.clickOnSignIn();
  loginPage.fillLoginForm(user.demoLogin, user.demoPassword);
  loginPage.confirmLogin();
});

When("the user loads the home page", () => {});

Then("the site logo should be displayed", () => {
  lumaHomePage.elements.logo().should("be.visible");
});

And("the navigation menu should be displayed and include all necessary options", () => {
  lumaHomePage.topbar.whatsNewButton().should("be.visible");
  lumaHomePage.topbar.womenButton().should("be.visible");
  lumaHomePage.topbar.menButton().should("exist");
  lumaHomePage.topbar.gearButton().should("be.visible");
  lumaHomePage.topbar.trainingButton().should("be.visible");
  lumaHomePage.topbar.saleButton().should("be.visible");
});

And("all images on the page should be correctly displayed", () => {
  lumaHomePage.photos.mainPhoto().should("be.visible");
  lumaHomePage.photos.promoPhoto().should("be.visible");
  lumaHomePage.photos.mixPhoto().should("be.visible");
  lumaHomePage.photos.erinPhoto().should("be.visible");
  lumaHomePage.photos.performancePhoto().should("be.visible");
  lumaHomePage.photos.ecofriendlyPhoto().should("be.visible");
});

And("all links on the page should be active and redirect to the correct pages", () => {
  lumaHomePage.redirectToWhatsNewTab();
  lumaHomePage.topbar.header().should("have.text", "What's New");
  lumaHomePage.redirectToWomenTab();
  lumaHomePage.topbar.header().should("have.text", "Women");
  lumaHomePage.redirectToMenTab();
  lumaHomePage.topbar.header().should("have.text", "Men");
  lumaHomePage.redirectToGearTab();
  lumaHomePage.topbar.header().should("have.text", "Gear");
  lumaHomePage.redirectToSaleTab();
  lumaHomePage.topbar.header().should("have.text", "Sale");
});

And("page footer should be correctly displayed", () => {
  lumaHomePage.footer.aboutUs().should("be.visible");
  lumaHomePage.footer.customerService().should("be.visible");
  lumaHomePage.footer.searchTerms().should("be.visible");
  lumaHomePage.footer.privacy().should("be.visible");
  lumaHomePage.footer.advancedSearch().should("be.visible");
  lumaHomePage.footer.contact().should("be.visible");
  lumaHomePage.footer.copyright().should("be.visible");
});

And("subsription option should be functional", () => {
  lumaHomePage.signUpForSubsription();
  lumaHomePage.elements.subsriptionConfirmed().should("be.visible");
});
