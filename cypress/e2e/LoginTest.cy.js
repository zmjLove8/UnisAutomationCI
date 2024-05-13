describe('Login test', () => {
  it('Enter correct user name and password,then can login successfully', () => {
    cy.visit('https://stage.logisticsteam.com/client-portal/#/login')
    cy.get('#email_input').type('Miranda.Cai@item.com')
    cy.get('#password_input').type('X9ZMq100')
    cy.get('button:contains("LOGIN")').click();
  

})
})