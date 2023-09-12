const { default: ItemsAccordion } = require('@/app/components/Accordion')
const { items } = require('@/app/examples/page')

describe('Accordion.cy.jsx', () => {
  it('Items accordion', () => {
    cy.mount(<ItemsAccordion items={items} />)
    cy.getDataTest('accordion-wrap').within(() => {
      cy.get('[data-test^="accordion-item"]').should('have.length', 4)
    })

    cy.contains(
      'You can quite easily write tests across pages to better test entire user workflows'
    ).should('not.be.visible')
    cy.getDataTest('accordion-item-1').within(() =>
      cy.get('[role=button]').click()
    )
    cy.contains(
      'You can quite easily write tests across pages to better test entire user workflows'
    ).should('be.visible')
    cy.getDataTest('accordion-item-1').within(() =>
      cy.get('[role=button]').click()
    )
    cy.contains(
      'You can quite easily write tests across pages to better test entire user workflows'
    ).should('not.be.visible')
  })
})
