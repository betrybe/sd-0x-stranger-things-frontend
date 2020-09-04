/// <reference types="Cypress" />

const FRONT_URL_DEV = "FRONT_URL_DEV"
const FRONT_URL = "FRONT_URL"

describe("8-Verifica se foi feito o deploy do frontend", () => {
    beforeEach(() => {
      
    });
    it('Verfica se a tag de desenvolvimento foi encontrada no frontend de desenvolvimento',() => {
        cy.visit(Cypress.env(FRONT_URL_DEV));
        cy.contains('Em desenvolvimento').should('exist')
    })
    it('Verfica se a tag de desenvolvimento não existe no frontend de produção',() => {
      cy.visit(Cypress.env(FRONT_URL));
      cy.contains('Em desenvolvimento').should('not.exist')
  })
  
  });
  