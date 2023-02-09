class homePage{

    elements ={
        newAccountBtn : () => cy.contains("Create an Account")
    }
        clickOnCreateAnAccount(){
        this.elements.newAccountBtn().click()
    }}
    module.exports = new homePage();