Feature: Login to home page

    Background:
        Given the user is on the login page

    Scenario: Correct Login to Home Page
        When the user enters a valid username and password
        And clicks the "Login" button
        Then the user should be redirected to the home page
        And the page should display a message confirming that the user has logged in successfully
        And the user should be able to access all the features available to logged-in users