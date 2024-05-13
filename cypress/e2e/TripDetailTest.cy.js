describe('Test', () => {
  it('Enter correct user name and password,then can login successfully', () => {
    cy.visit('https://stage.logisticsteam.com/client-portal/#/login')
    cy.get('#email_input').type('Miranda.Cai@item.com')
    cy.get('#password_input').type('X9ZMq100')
    cy.get('button:contains("LOGIN")').click();
  })
  it('TripDetailTest', () => {
    
    cy.get('.tablet-grid-100 > .el-select > .el-input > .el-input el-input-suffix > .el-input__inner').click();
    cy.contains('.el-select-dropdown .el-scrollbar', 'Dispatch Dashboard').click();

 
})
})
