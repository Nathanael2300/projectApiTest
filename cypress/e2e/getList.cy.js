describe('GET /users - retornar uma lista de usuarios', () => {

  const baseUrl = ('https://jsonplaceholder.typicode.com/users')

  const validarStatus = () => {
    cy.validarStatusAPI(baseUrl);
  }

  const retornarListasUsuarios = () => {
    cy.api({
      method: 'GET',
      url: baseUrl
    }).then((res) => {
      for (let i = 0; i < res.body.length; i++) {
        expect(res.status).to.be.equal(200);
        expect(res.body[i]).to.have.property('id');
        expect(res.body[i].id).to.be.a('number');
        expect(res.body[i]).to.have.property('name');
        expect(res.body[i].name).to.be.a('string');
        expect(res.body[i]).to.have.property('email');
        expect(res.body[i].email).to.be.include('@');
        expect(res.body[i].email).to.be.a('string');
      };
    });
  };

  beforeEach(() => {
    validarStatus();
  });

  it('Deve retornar uma lista de usuarios', () => {
    retornarListasUsuarios();
  });
});