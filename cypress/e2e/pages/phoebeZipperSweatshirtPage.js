class phoebeZipperSweatshirt {
    elements = {
        productNameSpan: () => cy.get('[data-ui-id="page-title-wrapper"]'),
        productPriceSpan: () => cy.get('#product-price-1130'),
        productDescriptionTabLabel: () => cy.get('#tab-label-description-title'),
        productAdditionalTabLabel: () => cy.get('#tab-label-additional-title'),
        productReviewsTabLabel: () => cy.get('#tab-label-reviews-title'),
        productDescriptionContentTab: () => cy.get('#description'),
        productAdditionalContentTab: () => cy.get('#additional'),
    }

    getProductNameSpan() {
        return this.elements.productNameSpan()
    }

    getProductPriceSpan() {
        return this.elements.productPriceSpan()
    }

    getProductDescriptionTabLabel() {
        return this.elements.productDescriptionTabLabel()
    }

    getProductAdditionalTabLabel() {
        return this.elements.productAdditionalTabLabel()
    }

    getProductReviewsTabLabel() {
        return this.elements.productReviewsTabLabel()
    }

    getProductDescriptionContentTab() {
        return this.elements.productDescriptionContentTab()
    }

    getProductAdditionalContentTab() {
        return this.elements.productAdditionalContentTab()
    }

};
module.exports = new phoebeZipperSweatshirt();