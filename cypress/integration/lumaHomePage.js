class lumaHomePage{

    elements ={
        signInButton : () => cy.contains("Sign In"),
        mainPhoto : () => cy.get('.home-main > img'),
        welcomeText: () =>cy.get(".panel.header span.logged-in"),
        welcomeTextArrow: ()=>cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action'),
        myAccountDropdownMenu: ()=>cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a')
    }
        clickOnSignIn(){
        this.elements.signInButton().click()
    }
        clickwelcomeTextArrow(){
            this.elements.welcomeTextArrow().click()
        }
        chooseMyAccountFromDropdownMenu(){
            this.elements.myAccountDropdownMenu().click()
        }
        

}
    export default new lumaHomePage();

    
    