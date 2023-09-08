import React from 'react'
import { ButtonPage } from '../pages/ButtonPage'
import { CheckboxesPage } from '../pages/CheckboxesPage'

describe('<App />', () => {
  it('goes to CheckboxesPage after click', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ButtonPage />)
    cy.get('button').should('have.text', 'Click to Personalize')
    cy.get('button').click()
    cy.mount(<CheckboxesPage />)
  })

  it('activates Checkbox', () => {
    cy.mount(<CheckboxesPage />)
    cy.get('[data-cy=checkbox1]').check()
    cy.get('[data-cy=checkbox2]').should('be.disabled')
  })
})
