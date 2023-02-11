   
    class accountCreationPage{

    elements={
    firstNameTextbox : () => cy.get("#firstname"),
    lastNameTextbox : ()=> cy.get("#lastname"),
    emailTextbox : () => cy.get("#email_address"),
    passwordTextbox : () => cy.get("#password"),
    passwordCOnfirmationTextbox : () => cy.get("#password-confirmation"),
    createAccountBtn : () => cy.get('button[title="Create an Account"]')
    }

    fillRegisterForm(firstName,lastName,password){
        this.elements.firstNameTextbox().type(firstName);
        this.elements.lastNameTextbox().type(lastName);
        this.elements.emailTextbox().type(this.createRandomTitle());
        this.elements.passwordTextbox().type(password);
        this.elements.passwordCOnfirmationTextbox().type(password);
        this.confirmRegistration();
    }
    confirmRegistration(){
        this.elements.createAccountBtn().click()
    }

    createRandomTitle(){
        let today = new Date().toLocaleDateString("fr-CH");
        let number = Math.floor(Math.random() * 100000);
        let title = `Automat${today}${number}@test.pl`;
        return title;
    }
}
export default new accountCreationPage();