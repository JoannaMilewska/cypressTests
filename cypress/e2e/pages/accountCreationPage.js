   
    class accountCreationPage{

    elements={
    firstNameTextbox : () => cy.get("#firstname"),
    lastNameTextbox : ()=> cy.get("#lastname"),
    emailTextbox : () => cy.get("#email_address"),
    passwordTextbox : () => cy.get("#password"),
    passwordCOnfirmationTextbox : () => cy.get("#password-confirmation"),
    createAccountBtn : () => cy.get('button[title="Create an Account"]')
    }
    fillRegisterForm(firstName, lastName){

        let today = new Date().toLocaleDateString("fr-CH");
        let number = Math.floor(Math.random() * 100000);
        let title = `Automat${today}${number}@test.pl`;
       
        this.elements.firstNameTextbox().type(firstName);
        this.elements.lastNameTextbox().type(lastName);
        this.elements.emailTextbox().type(title);
        this.elements.passwordTextbox().type("Password123");
        this.elements.passwordCOnfirmationTextbox().type("Password123");
    }
    confirmRegistration(){
        this.elements.createAccountBtn().click()
    }
}
module.exports = new accountCreationPage();