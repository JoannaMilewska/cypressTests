Feature:  Correct Display of Home Page

    Background:
        Given the user is on the home page of Luma

    Scenario: Correct Login to Home Page
        When the user loads the home page
        Then the header of the page should display the correct text
        And the site logo should be displayed
        And the navigation menu should be displayed and include all necessary options
        And all images on the page should be correctly displayed
        And all links on the page should be active and redirect to the correct pages
        And page sections such as the footer should be correctly displayed
        And all forms such as a contact form should be functional