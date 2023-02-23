class myAccountPage {

    elements = {
        personalInfo: () => cy.get('.box-information > .box-content > p')
    }
}
export default new myAccountPage();