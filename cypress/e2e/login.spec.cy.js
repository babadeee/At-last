// const { before } = require("mocha")

describe('example to-do app', () => {

   before('',() => {
    cy.visit('https://tutorialsninja.com/demo/')
   })
        it('Verify is user is able to register', () => {
                cy.contains('My Account').click()
         cy.contains('Register').click()
         cy.get('#input-firstname').type('Oladayo')
         cy.get('#input-lastname').type('Bolade')
         cy.get('#input-email').type('benpra90i1@gmail.com')
         cy.get('#input-telephone').type('08065258083')
         cy.get('#input-password').type(12345678)
         cy.get('#input-confirm').type(12345678)
         cy.get('[name="agree"]').check()
         cy.get('[value="Continue"]').click()
         cy.get('#content > h1').should('have.text', 'Your Account Has Been Created!');
        })

        
})
