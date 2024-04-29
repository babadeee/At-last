before('',() => {
    cy.visit('https://tutorialsninja.com/demo/')
   })
        it('Verify is user is able to register', () => {
                cy.contains('My Account').click()
                cy.contains('Login').click()
                cy.contains('Forgotten Password').click()
                cy.get('#input-email').type('benpra90i1@gmail.com')
                cy.get('[value="Continue"]').click()
        })