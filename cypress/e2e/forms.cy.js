describe('Forms test', () => {
  beforeEach(() => cy.visit('/forms'))
  it('Test subscribe form', () => {
    cy.contains(/testing forms/i)

    cy.getdata.test('subscribe-form').find('input').as('subscribe-input')
    cy.get('@subscribe-input').type('sookwalinga@gmail.com')
    cy.contains(/Successfully subbed: sookwalinga@gmail.com!/i).should(
      'not.exist'
    )
    cy.getdata.test('subscribe-button').click()
    cy.contains(/Successfully subbed: sookwalinga@gmail.com!/i).should('exist')
    cy.wait(3000)
    cy.contains(/Successfully subbed: sookwalinga@gmail.com!/i).should(
      'not.exist'
    )

    cy.get('@subscribe-input').type('sookwalinga@gmail.io')
    cy.getdata.test('subscribe-button').click()
    cy.contains(/Invalid email: sookwalinga@gmail.io!/i).should('exist')
    cy.wait(3000)
    cy.contains(/Invalid email: sookwalinga@gmail.io!/i).should('not.exist')

    cy.contains(/fail!/i).should('not.exist')
    cy.getdata.test('subscribe-button').click()
    cy.contains(/fail!/i).should('exist')
  })
})
