/// <reference types="cypress" />



describe('login to wejit', () => {
    beforeEach(() => {
      cy.visit('https://wejit-dev.test.jit.ninja/')
    })
    it('login to wejit', () => {
        cy.get('#login-button').click()
    })
  })
  