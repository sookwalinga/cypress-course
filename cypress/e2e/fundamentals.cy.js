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
    cy.get('[data-test="accordion-item-1"]').click().pause()
  })
})
