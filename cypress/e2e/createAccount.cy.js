/// <reference types="cypress" />

describe('create an account on luma', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
    })
    it('create an account on luma', () => {
       cy.get('.panel > ul > li:nth-child(3) > a').click()
    })
  })
  