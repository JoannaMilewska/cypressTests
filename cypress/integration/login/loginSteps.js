import { use } from "chai";
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import user from "../../fixtures/data.json";
import loginPage from "../../e2e/pages/loginPage";
import lumaHomePage from "../../e2e/pages/lumaHomePage";
import myAccountPage from "../../e2e/pages/myAccountPage";

Given('the user is on the login page', () => {
    cy.visit('/')
    lumaHomePage.clickOnSignIn();
})

When('the user enters a valid username and password', () => {
    loginPage.fillLoginForm(user.demoLogin, user.demoPassword);
})

And('clicks the "Login" button', () => {
   loginPage.confirmLogin();
})

Then('the user should be redirected to main page',()=>{
    lumaHomePage.elements.mainPhoto().should('be.visible');
})

And('the page should display a message confirming that the user has logged in successfully', () => {
    lumaHomePage.elements.welcomeText().should("have.text",`Welcome, ${user.demoName} ${user.demoLastName}!`);
})

And('the user should be able to access all the features available to logged-in users', () => {
    lumaHomePage.clickwelcomeTextArrow();
    lumaHomePage.chooseMyAccountFromDropdownMenu();
    myAccountPage.elements.personalInfo().should('be.visible');
})
