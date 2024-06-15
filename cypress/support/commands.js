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


Cypress.Commands.add('solveRecaptcha', () => {
    // Function to get the iframe body
    const getIframeBody = () => {
        return cy
            .get('iframe')
            .first()
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)
    }

    // Click the reCAPTCHA checkbox inside the iframe
    getIframeBody().find('.recaptcha-checkbox-border').should('be.visible').click()

    // Wait for reCAPTCHA to process (adjust timing as needed)
    cy.wait(5000)

    // If additional challenge is present, you might need a manual intervention
    // or an external service to handle it.
})