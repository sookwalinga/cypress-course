describe('Forms test', () => {
  beforeEach(() => cy.visit('/forms'))
  it('Test subscribe form', () => {
    cy.contains(/testing forms/i)
    cy.getDataTest('subscribe-form').find('input').type('sookwalinga@gmail.com')
  })
})
