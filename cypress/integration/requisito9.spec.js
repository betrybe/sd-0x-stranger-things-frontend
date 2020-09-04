/// <reference types="Cypress" />

const PESQUISAR = "Pesquisar";
const MARTIN = "Martin";
const INVERTED_MARTIN = "uᴉʇɹɐW";
const FRONT_URL = "FRONT_URL";
const Claudia = "Claudia"

describe("9-Verifica se foi feito o deploy do frontend", () => {
  beforeEach(() => {
    cy.visit(Cypress.env(FRONT_URL));
  });
  it("Verifica se a pagina foi renderizada com sucesso", () => {
    cy.get(".change-reality").should("exist");
  });

  it("Verifica se a pesquisa funciona", () => {
    cy.contains(PESQUISAR).click();
    cy.contains(MARTIN).should("exist");
  });
  it("Verifica se mudar de realidade funciona", () => {
    cy.contains("Mudar de Realidade").click();
    cy.contains(PESQUISAR).click();
    cy.contains(INVERTED_MARTIN).should("exist");
  });

  it("Verifica se mudar pra próxima página funciona", () => {
    cy.contains(PESQUISAR).click();
    cy.contains(MARTIN).should("exist");

    cy.contains("Próximo").click();

    cy.contains("2").should("exist");
    cy.contains(Claudia).should("exist");

    cy.contains("Anterior").click();

    cy.contains("1").should("exist");
    cy.contains(MARTIN).should("exist");
  });
});
