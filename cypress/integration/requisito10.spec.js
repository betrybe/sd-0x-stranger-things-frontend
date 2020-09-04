/// <reference types="Cypress" />

const FRONT_URL_DEV = "FRONT_URL_DEV"

describe("8-Verifica se foi feito o deploy do frontend", () => {
    beforeEach(() => {
      cy.visit(Cypress.env(FRONT_URL_DEV));
    });
    it('Verfica se a tag de desenvolvimento foi encontrada no frontend',() => {
        cy.contains('Em desenvolvimento').should('exist')
    })
  
  });
  