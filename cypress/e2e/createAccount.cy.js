/// <reference types="cypress" />

describe("create an account on luma", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });
  it("create an account on luma", () => {
    const firstName = "Joanna";
    const lastName = "Mmm";

    let today = new Date().toLocaleDateString("fr-CH");
    let number = Math.floor(Math.random() * 100000);
    let title = `Automat${today}${number}@test.pl`;

    cy.contains("Create an Account").click();
    cy.get("#firstname").type(firstName);
    cy.get("#lastname").type(lastName);
    cy.get("#email_address").type(title);
    cy.get("#password").type("Password1234");
    cy.get("#password-confirmation").type("Password1234");
    cy.get('button[title="Create an Account"]').click();
    cy.get(".panel.header span.logged-in").should(
      "have.text",
      `Welcome, ${firstName} ${lastName}!`
    );
  });
});
