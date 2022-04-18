// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//TODO
//choose date in one function passing varibles

Cypress.Commands.add('chooseDate', (month, day) => {

    cy.get('.vc-title-wrapper').click().then(() => {

        cy.get('.vc-grid-container > div:nth-child(2)').eq(0).should('exist').click();

        cy.get('.vc-grid-container:nth-child(2) span').eq(5).click();

        cy.get('.vc-grid-container:nth-child(2) span').eq(month).click();

        cy.get(day).click();

        });
})

/*Cypress.Commands.add('chooseDate', (month, day) => {

    cy.get('.vc-title-wrapper').click().then(() => {
    
        cy.get('.vc-grid-container > div:nth-child(2)').eq(0).should('exist').click();
    
        cy.get('.vc-grid-container:nth-child(2) span').eq(5).click();
    
        cy.get('.vc-grid-container:nth-child(2) span').eq(8).click();
    
        cy.get('.id-2021-09-02').click();
    
        });
    })
    */