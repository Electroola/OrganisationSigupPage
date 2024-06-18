describe('Heroku Signup Test', () => {
  beforeEach(() => {
    cy.visit('https://signup.heroku.com/');
    // Dismiss cookie banner if it appears
    cy.get('#onetrust-accept-btn-handler').click();
  });

  it('completes the signup form', () => {
    // Fill out the signup form
    cy.get('#first_name').type('Alao', { force: true });
    cy.get('#last_name').type('Lukman', { force: true });
    cy.get('#email').type('lukmanolayiwola125@gmail.com', { force: true });
    cy.get('#company').type('SmartTest', { force: true });
    cy.get('#role').select('Professional Developer', { force: true });
    cy.get('#self_declared_country').select('United Kingdom')
    cy.get('#main_programming_language').select('Node.js', { force: true });

    // Read and accept the terms and conditions
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();

    // Submit the form
    cy.get(':nth-child(14) > .btn').click({ force: true });

    // Assert the reCAPTCHA error message
    cy.contains('We could not verify you are not a robot. Please try the CAPTCHA again.').should('be.visible');
  });
  // it('Successful Signup Confirmation Page', ()=>{


  // })
});
