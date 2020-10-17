
describe('Cypress RealWorld App - e2e scenarios', () => {
  let testdata: any;
  const startDate: string = Cypress.moment().format('MM/DD/YYYY');
 

  beforeEach(function () {
    cy.visit('/')
    cy.fixture('test-data-file').then(data => testdata = data);
    cy.viewport(1280, 720);
  
  });

  it('Register a new user', () => {
    cy.get('[data-test="signup"]').should('be.visible').click();
    cy.get('#firstName').
    
  });

 
});
