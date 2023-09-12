describe('Various examples', () => {
  beforeEach(() => cy.visit('/examples'))
  it('multi', () => {
    cy.contains(/examples/i)
  })
})
