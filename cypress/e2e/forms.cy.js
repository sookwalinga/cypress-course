describe('Forms test', () => {
  beforeEach(() => cy.visit('/forms'))
  it('', () => {
    cy.getDataTest('fundamentals-header').should(
      'contain.text',
      'Testing Fundamentals'
    )
  })
})
