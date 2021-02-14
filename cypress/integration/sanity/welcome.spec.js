describe('My First Test', () => {
  it('Check if Welcome is here', () => {
    cy.visit(Cypress.config().baseUrl);
    cy.get('h1').should('have.text', 'Main');
  });
});
