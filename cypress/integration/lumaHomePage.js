class lumaHomePage{

    elements ={
        signInButton : () => cy.contains("Sign In"),
        mainPhoto : () => cy.get('.home-main > img'),
        welcomeText: () =>cy.get(".panel.header span.logged-in"),
        welcomeTextArrow: ()=>cy.get('.panel.header>.header.links>.customer-welcome button'),
        myAccountDropdownMenu:()=>cy.contains("My Account")
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

    
    