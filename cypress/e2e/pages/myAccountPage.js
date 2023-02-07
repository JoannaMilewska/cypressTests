
class myAccountPage{

    elements ={
        welcomeText :() => cy.get(".panel.header span.logged-in")
    }
        validateWelcomeScreen(firstName, lastName){
        this.elements.welcomeText().should("have.text",
        `Welcome, ${firstName} ${lastName}!`
      );
    }}
    module.exports = new myAccountPage();