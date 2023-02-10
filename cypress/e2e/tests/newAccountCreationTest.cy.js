/// <reference types="cypress" />
import homePage from "../pages/homePage";
import accountCreationPage from "../pages/accountCreationPage";
import myAccountPage from "../pages/myAccountPage";
import user from "../../fixtures/data.json"


describe("create an account on luma", () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it("create an account on luma", () => {
    homePage.clickOnCreateAnAccount();
    accountCreationPage.fillRegisterForm(user.firstName, user.lastName, user.password);
    myAccountPage.elements.welcomeText().should("have.text",`Welcome, ${user.firstName} ${user.lastName}!`);
  })
});