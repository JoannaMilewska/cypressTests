class loginPage{

    elements={
    loginTextbox : () => cy.get("#email"),
    passwordTextbox : () => cy.get("#pass"),
    loginButton :()=>cy.get('#send2')
}
fillLoginForm(loginTextbox,passwordTextbox){
    this.elements.loginTextbox().type(loginTextbox);
    this.elements.passwordTextbox().type(passwordTextbox);
    
}
confirmLogin(){
    this.elements.loginButton().click()
}}

export default new loginPage();