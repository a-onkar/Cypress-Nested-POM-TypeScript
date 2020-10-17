
/* Global Variable Declarations */

import {} from "cypress/types/lodash";


/* Custom Command Global Namespace Declaration */
 
declare global {
    namespace Cypress {
        interface Chainable {
            /**
      * Custom command to create a Demand Planning.
      * @example cy.registerUser()
     */
            userRegistration: typeof registerUser;
            userLogin: typeof userLogin;
            createAccount: typeof createUserAccount;
        }
    }
}


function registerUser(firstName: string, lastName: string, dob: string,): void {
    cy.get('input').first().should('have.class', '.name').type(firstName);
    cy.get('input').eq(1).should('be.class', '.name').clear().type(lastName).tab();
    cy.get('input').eq(2).should('be.class', '.date').clear().type(dob).tab();
    cy.get('select').first().should('be.visible').select('Maharashtra');
    cy.get('select').last().should('be.visible').select('India');
}
Cypress.Commands.add('registerUser', registerUser);

Cypress.Commands.add('nameStringVariable', () => {} );

function userLogin(userName: string, userPassword: string): void {
    cy.get('input').first().should('have.class', '.name').type(userName);
    cy.get('input').eq(1).should('be.class', '.name').clear().type(userPassword).tab();
    cy.get('#submit').should('be.enabled').click()

}
Cypress.Commands.add('userLogin', userLogin);


function createUserAccount(description: string, service: string, poNumber: string): void {

}
Cypress.Commands.add('searchItem', createUserAccount);
