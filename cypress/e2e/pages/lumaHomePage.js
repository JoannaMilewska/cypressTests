class lumaHomePage {
  elements = {
    signInButton: () => cy.contains("Sign In"),
    mainPhoto: () => cy.get(".home-main > img"),
    welcomeText: () => cy.get(".panel.header span.logged-in"),
    welcomeTextArrow: () => cy.get(".panel.header>.header.links>.customer-welcome button"),
    myAccountDropdownMenu: () => cy.contains("My Account"),
    logo: () => cy.get(".logo"),
  };
  topbar = {
    whatsNewButton: () => cy.contains("What's New"),
    womenButton: () => cy.contains("Women"),
    menButton: () => cy.contains("Men"),
    gearButton: () => cy.contains("Gear"),
    trainingButton: () => cy.contains("Training"),
    saleButton: () => cy.contains("Sale"),
  };
  photos = {
    mainPhoto: () => cy.get(".blocks-promo > a"),
    promoPhoto: () => cy.get("a.block-promo.home-pants"),
    mixPhoto: () => cy.get("a.block-promo.home-t-shirts"),
    erinPhoto: () => cy.get("a.block-promo.home-erin"),
    performancePhoto: () => cy.get("a.block-promo.home-performance"),
    ecofriendlyPhoto: () => cy.get("a.block-promo.home-eco"),
  };
  footer = {
    moreWebsites: () => cy.contains("More websites for practice"),
    aboutUs: () => cy.contains("About us"),
    customerService: () => cy.contains("Customer Service"),
    askQuestion: () => cy.contains("Ask a question"),
    writeForUs: () => cy.contains("Write for Us"),
    searchTerms: () => cy.contains("Search Terms"),
    privacy: () => cy.contains("Privacy and Cookie Policy"),
    advancedSearch: () => cy.get(".footer.content > :nth-child(3) > :nth-child(3) > a"),
    ordersAndReturns: () => cy.contains("Orders and Returns"),
    subsriptionButton: () => cy.get(".action.subscribe.primary"),
    subsriptionEmailTexbox: () => cy.get("#newsletter"),
    opensourceInfo: () => cy.get(".page-wrapper >.block-static-block"),
    copyright: () => cy.get(".copyright"),
  };
  clickOnSignIn() {
    this.elements.signInButton().click();
  }
  clickwelcomeTextArrow() {
    this.elements.welcomeTextArrow().click();
  }
  chooseMyAccountFromDropdownMenu() {
    this.elements.myAccountDropdownMenu().click();
  }
}
export default new lumaHomePage();
