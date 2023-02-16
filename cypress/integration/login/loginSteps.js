import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('the user is on the login page', () => {
    cy.visit('/')
}
)

When('the user enters a valid username and password', () => {
    //code
})

Then('the user should be redirected to the home page', () => {
    //code
})

And('clicks the "Login" button', () => {
    //code
})

And('the page should display a message confirming that the user has logged in successfully', () => {
    //code
})

And('the user should be able to access all the features available to logged-in users', () => {
    //code
})
