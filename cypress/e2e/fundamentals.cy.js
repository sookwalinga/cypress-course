describe('Fundamentals test', () => {
  it('Contains correct header test', () => {
    cy.visit('/fundamentals')
    cy.get('[data-test="fundamentals-header"]').should(
      'contain.text',
      'Testing Fundamentals'
    )
  })
  it('Accordion works correctly', () => {
    cy.visit('/fundamentals')
    cy.contains(/Your test will exist in a describe block/i).should(
      'not.be.visible'
    )
    cy.get('[data-test="accordion-item-1"]').click()
    cy.contains(/Your test will exist in a describe block/i).should(
      'be.visible'
    )
    cy.get('[data-test="accordion-item-1"]').click()
    cy.contains(/Your test will exist in a describe block/i).should(
      'not.be.visible'
    )
  })
})
