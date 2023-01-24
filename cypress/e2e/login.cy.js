/// <reference types="cypress" />

describe('login to wejit', () => {
    beforeEach(() => {
      cy.visit('https://wejit-dev.test.jit.ninja/')
    })
    it('login to wejitt', () => {
        cy.get('#login-button').click()
    })
  })
  