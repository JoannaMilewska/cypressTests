class lumaHomePage{

    elements ={
        signInButton : () => cy.contains("Sign In"),
        mainPhoto : () => cy.get('.home-main > img'),
        welcomeText: () =>cy.get(".panel.header span.logged-in"),
        welcomeTextArrow: ()=>cy.get('.panel.header>.header.links>.customer-welcome button'),
        myAccountDropdownMenu:()=>cy.contains("My Account"),
        logo:()=> cy.get('.logo'),
        }
    topbar={
        whatsNewButton:()=>cy.contains("What's New"),
        womenButton:()=>cy.contains("Women"),
        menButton:()=>cy.contains("Men"),
        gearButton:()=>cy.contains("Gear"),
        trainingButton:()=>cy.contains("Training"),
        saleButton:()=>cy.contains("Sale"),
        }
    photos={
        mainPhoto:()=>cy.get(".blocks-promo > a"),
        promoPhoto:()=>cy.get("a.block-promo.home-pants"),
        mixPhoto:()=>cy.get("a.block-promo.home-t-shirts"),
        erinPhoto:()=>cy.get("a.block-promo.home-erin"),
        performancePhoto:()=>cy.get("a.block-promo.home-performance"),
        ecofriendlyPhoto:()=>cy.get("a.block-promo.home-eco")

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

    
    