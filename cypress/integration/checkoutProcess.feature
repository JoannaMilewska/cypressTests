Feature:  Correct checkout process

    Background:
        Given the user is on the home page of Luma
        And the user logs in
    Scenario: Correct checkout process
        When the user adds a product to the cart
        And clicks the cart icon to view the contents of the cart
        And clicks the "Proceed to Checkout" button
        Then the billing and shipping information should be displayed correctly and can be edited if necessary
        Then the user selects a shipping method
        Then the user goes to the next page and selects a payment method
        And the order total should be correctly calculated and displayed
        Then the user clicks the "Place Order" button
        And an order confirmation page should be displayed.
        And the order number, date, and order total should be correctly displayed.
        And the order details, such as the products, billing and shipping information, and payment method are correctly displayed.
