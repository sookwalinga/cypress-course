const { default: ItemsAccordion } = require('@/app/components/Accordion')
const { items } = require('@/app/examples/page')

describe('Accordion.cy.jsx', () => {
  it('Items accordion', () => {
    cy.mount(<ItemsAccordion items={items} />)
  })
})
