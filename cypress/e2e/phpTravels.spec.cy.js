describe('Registration Form', () => {


  it('Verify the Hambuger Icon is Visible', () => {
    cy.visit('https://phptravels.com/')
    cy.get('.navbar-toggler') // Adjust this selector based on the actual element
      .should('be.visible')
      .click();
    cy.get('.nav-right > .btn-primary').click()

  })

  it('phpTravels Registration Page', () => {
    cy.visit('https://phptravels.org/register.php')
    cy.url({ timeout: 30000 }).should('contain', 'register.php');
    cy.get('#inputFirstName').type('Alao');
    cy.get('#inputLastName').type('LastName');
    cy.get('#inputEmail').type('example1@example.com');
    cy.get('#inputPhone').type('1234567890'); // Adjust based on actual field
    cy.get('#inputCompanyName').type('Example Company');
    cy.get('#inputAddress1').type('123 Example St');
    cy.get('#inputCity').type('Example City');
    cy.get('#stateinput').type('Example State'); // Adjust based on actual field
    cy.get('#inputPostcode').type('12345');
    cy.get('#inputCountry').select('United States');
    cy.scrollTo('bottom');

    // Fill out the password fields
    cy.get('#inputNewPassword1').type('password123');
    cy.get('#inputNewPassword2').type('password123');


    cy.get('.bootstrap-switch-handle-on').click()
    cy.get('[align="center"] > .btn').click()


  })
})