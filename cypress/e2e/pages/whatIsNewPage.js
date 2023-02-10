class WhatIsNewPage{
    elements ={
        whatIsNewButton :() => cy.get("#ui-id-3"),
        productButton :() => cy.get(".product-item .product-item-info a").contains('Phoebe Zipper Sweatshirt')
        
    }

    clickWhatIsNewButton(){
        this.elements.whatIsNewButton().click()
    }


    clickProductButton(){
        this.elements.productButton().click()
    }

};
    module.exports = new WhatIsNewPage();