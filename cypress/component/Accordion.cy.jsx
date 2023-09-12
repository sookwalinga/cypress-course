const { default: ItemsAccordion } = require('@/app/components/Accordion')
const { items } = require('@/app/examples/page')

describe('Accordion.cy.jsx', () => {
  it('Items accordion', () => {
    cy.mount(<ItemsAccordion items={items} />)
    cy.getDataTest('accordion-wrap').within(() => {
      cy.get('[data-test^="accordion-item"]').should('have.length', 4)
    })
  })
})
