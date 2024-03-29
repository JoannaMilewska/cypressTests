Feature:  Correct Display of Home Page

    Background:
        Given the user is on the home page of Luma
        And the user logs in

    Scenario: Correct Login to Home Page
        When the user loads the home page
        Then the site logo should be displayed
        And the navigation menu should be displayed and include all necessary options
        And all images on the page should be correctly displayed
        And all links on the page should be active and redirect to the correct pages
        And page footer should be correctly displayed
        And subsription option should be functional