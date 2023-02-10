class myAccountPage {

    elements = {
        welcomeText: () => cy.get(".panel.header span.logged-in")
    }
}
export default new myAccountPage();