class LoginPage {
    visit() {
      cy.visit('https://stage.logisticsteam.com/client-portal/#/login');
    }
  
    getEmailField() {
      return cy.get('#email_input');
    }
  
    getPasswordField() {
      return cy.get('#password_input');
    }
  
    getLoginButton() {
      return cy.get('button:contains("LOGIN")');
    }
  
    login() {
        const username = Cypress.env('username');
        const password = Cypress.env('password');
        this.getEmailField().type(username);
        this.getPasswordField().type(password);
        this.getSubmitButton().click();
      }
  }
  
  export default LoginPage;