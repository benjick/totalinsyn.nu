/// <reference types="Cypress" />

context('Action page', () => {
  it('should render images', () => {
    cy.visit('/01')
    cy.get('[data-testid="thumbnail"]')
      .its('length')
      .should('be.gt', 0)
    cy.get('[data-testid="thumbnail"]')
      .first()
      .scrollIntoView()
      .find('img')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.percySnapshot();
  })
})
