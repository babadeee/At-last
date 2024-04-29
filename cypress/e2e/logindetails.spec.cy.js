before('',() => {
    cy.visit('https://tutorialsninja.com/demo/')
   })
        it('Verify the user is able to login', () => {
                cy.contains('My Account').click()
                cy.contains('Login').click()
                cy.get('#input-email').type('benpra90i1@gmail.com')
                cy.get('#input-password').type(12345678)
                cy.get('[type="submit"]').click()
                
        })