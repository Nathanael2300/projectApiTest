Cypress.Commands.add('validarStatusAPI', (url) => {
    cy.api({
      method: 'GET',
      url: url
    }).then((res) => {
      expect(res.status).to.equal(200);
    });
  });
  