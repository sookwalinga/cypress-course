describe('Fundamentals test', () => {
  beforeEach(() => cy.visit('/fundamentals'))
  it('Contains correct header test', () => {
    cy.get('[data-test="fundamentals-header"]').should(
      'contain.text',
      'Testing Fundamentals'
    )
  })
  it('Accordion works correctly', () => {
    cy.contains(/Your test will exist in a describe block/i).should(
      'not.be.visible'
    )
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your test will exist in a describe block/i).should(
      'be.visible'
    )
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your test will exist in a describe block/i).should(
      'not.be.visible'
    )
  })
})
