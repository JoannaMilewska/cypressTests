/// <reference types="cypress" />
import homePage from "../pages/homePage";
import accountCreationPage from "../pages/accountCreationPage";
import myAccountPage from "../pages/myAccountPage";
const firstName = "Joanna";
const lastName ="Milewska";

describe("create an account on luma", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });
  it("create an account on luma", () => {
  homePage.clickOnCreateAnAccount();
  accountCreationPage.fillRegisterForm(firstName,lastName);
  accountCreationPage.confirmRegistration();
  myAccountPage.validateWelcomeScreen(firstName, lastName);
  })
});