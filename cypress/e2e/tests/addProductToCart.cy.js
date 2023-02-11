/// <reference types="cypress" />
import whatIsNewPage from "../pages/whatIsNewPage.js"
import phoebeZipperSweatshirtPage from "../pages/phoebeZipperSweatshirtPage.js"

describe("add product to cart", () => {
  before(() => {
    cy.visit("/");
  });

  //TODO: poprawic opis testu, dokonczyc dalsze testy issue-8
  it("add product to cart", () => {
    //open what-is-new page
    whatIsNewPage.clickWhatIsNewButton();
    cy.url().should('include', '/what-is-new')

    //open phoebe-zipper-sweatshirt
    whatIsNewPage.clickProductButton();
    cy.url().should('include', '/phoebe-zipper-sweatshirt')

    //Verify that the product name and price information is correctly displayed.
    phoebeZipperSweatshirtPage.getProductNameSpan().should("have.text", "Phoebe Zipper Sweatshirt")
    phoebeZipperSweatshirtPage.getProductPriceSpan().should("have.text", "$59.00")

    //Verify that the details information is correctly displayed.
    phoebeZipperSweatshirtPage.getProductDescriptionTabLabel().click()
    phoebeZipperSweatshirtPage.getProductDescriptionTabLabel().contains("Details")
    phoebeZipperSweatshirtPage.getProductDescriptionContentTab().contains("A sophisticated layer of warmth awaits you in our full-zip sweatshirt jacket. You'll reach for this one in any season to enjoy its sturdy exterior and plush interior.")

    //Verify that the more information information is correctly displayed.
    phoebeZipperSweatshirtPage.getProductAdditionalTabLabel().click()
    phoebeZipperSweatshirtPage.getProductAdditionalTabLabel().contains("More Information ")
    phoebeZipperSweatshirtPage.getProductAdditionalContentTab().contains("Full Zip, Sweatshirt, Hoodie")
    phoebeZipperSweatshirtPage.getProductAdditionalContentTab().contains("Cotton, Polyester")
    phoebeZipperSweatshirtPage.getProductAdditionalContentTab().contains("Solid")
    phoebeZipperSweatshirtPage.getProductAdditionalContentTab().contains("Cool, Indoor, Mild")

    //Verify that the reviews information is correctly displayed.
    phoebeZipperSweatshirtPage.getProductReviewsTabLabel().click()
    phoebeZipperSweatshirtPage.getProductReviewsTabLabel().contains("Reviews ")

    //Verify that the product images are correctly displayed.
    phoebeZipperSweatshirtPage.getproductImage().should("be.visible")
      .should("have.class", "fotorama__img")

    //Select any necessary product options such as size or color.


  });
});