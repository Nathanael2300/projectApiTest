describe('DELETE /users/1 - Deletar usuario da lista', () => {

  const baseUrl = 'https://jsonplaceholder.typicode.com/users';

  const validarStatus = () => {
      cy.validarStatusAPI(baseUrl);
  };

  const deletarUsuario = () => {
    cy.api({
      method: 'DELETE',
      url: baseUrl + '/1'
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.be.empty;
    });
  };

  beforeEach(() => {
    validarStatus();
  });

  it('Deve deletar o usuario', () => {
    deletarUsuario();
  });
});