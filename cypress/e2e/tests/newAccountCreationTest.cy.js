/// <reference types="cypress" />
import homePage from "../pages/homePage";
import accountCreationPage from "../pages/accountCreationPage";
import myAccountPage from "../pages/myAccountPage";


describe("create an account on luma", () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it("create an account on luma", () => {
  cy.fixture('data.json').then((user)=>{
  homePage.clickOnCreateAnAccount();
  accountCreationPage.fillRegisterForm(user.firstName,user.lastName,user.password);
  myAccountPage.validateWelcomeScreen(user.firstName, user.lastName);
  })})
});