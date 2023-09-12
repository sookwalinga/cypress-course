describe('Fundamentals test', () => {
  it('Contains correct header test', () => {
    cy.visit('/fundamentals')
    cy.get('[data-test="fundamentals-header"]').should(
      'contain.text',
      'Testing Fundamentals'
    )
  })
})
