describe('Forms test', () => {
  beforeEach(() => cy.visit('/forms'))
  it('Test subscribe form', () => {
    cy.contains(/testing forms/i)
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
    cy.get('@subscribe-input').type('sookwalinga@gmail.com')
    cy.contains(/Successfully subbed: sookwalinga@gmail.com!/i).should(
      'not.exist'
    )
    cy.getDataTest('subscribe-button').click()
    cy.contains(/Successfully subbed: sookwalinga@gmail.com!/i).should('exist')
    cy.wait(3000)
    cy.contains(/Successfully subbed: sookwalinga@gmail.com!/i).should(
      'not.exist'
    )
  })
})
