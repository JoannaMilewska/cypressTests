/// <reference types="cypress" />
import mainFixtures from "../../fixtures/main.json"
import whatIsNewPage from "../pages/whatIsNewPage.js"
import phoebeZipperSweatshirtPage from "../pages/phoebeZipperSweatshirtPage.js"

describe("add product to cart", () => {
  before(() => {
    cy.visit(mainFixtures.baseUrl);
  });

  //TODO: poprawic opis testu, dokonczyc dalsze testy issue-8
  it("open what is new page", () => {
    whatIsNewPage.clickWhatIsNewButton();
    cy.url().should('include', '/what-is-new')
    whatIsNewPage.clickProductButton();
    cy.url().should('include', '/phoebe-zipper-sweatshirt')
    phoebeZipperSweatshirtPage.getProductNameSpan().should("have.text", "Phoebe Zipper Sweatshirt")
    phoebeZipperSweatshirtPage.getProductPriceSpan().should("have.text", "$59.00")

    phoebeZipperSweatshirtPage.getProductDescriptionTabLabel().click()
    phoebeZipperSweatshirtPage.getProductDescriptionTabLabel().contains("Details")
    phoebeZipperSweatshirtPage.getProductDescriptionContentTab().contains("A sophisticated layer of warmth awaits you in our full-zip sweatshirt jacket. You'll reach for this one in any season to enjoy its sturdy exterior and plush interior.")

    phoebeZipperSweatshirtPage.getProductAdditionalTabLabel().click()
    phoebeZipperSweatshirtPage.getProductAdditionalTabLabel().contains("More Information ")
    phoebeZipperSweatshirtPage.getProductAdditionalContentTab().contains("Full Zip, Sweatshirt, Hoodie")
    phoebeZipperSweatshirtPage.getProductAdditionalContentTab().contains("Cotton, Polyester")
    phoebeZipperSweatshirtPage.getProductAdditionalContentTab().contains("Solid")
    phoebeZipperSweatshirtPage.getProductAdditionalContentTab().contains("Cool, Indoor, Mild")

    phoebeZipperSweatshirtPage.getProductReviewsTabLabel().click()
    phoebeZipperSweatshirtPage.getProductReviewsTabLabel().contains("Reviews ")

  });
});