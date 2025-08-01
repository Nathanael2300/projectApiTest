describe('GET /users/id:1 - retornar um usuario', () => {

const baseUrl = ('https://jsonplaceholder.typicode.com/users')

const validarStatus = () => {
    return cy.api({
        method: 'GET',
        url: baseUrl 
      }).then((res) => {
         expect(res.status).to.equal(200);
      });
 };

 const retornarUsuario = () => {
    cy.api({
        method: 'GET',
        url: baseUrl + '/1',
    }).then((res) => {
         expect(res.status).to.be.equal(200)
         expect(res.body).to.have.property('id', 1);
         expect(res.body.id).to.be.a('number');
         expect(res.body).to.have.property('name', 'Leanne Graham');
         expect(res.body.name).to.be.a('string');
         expect(res.body).to.have.property('email', 'Sincere@april.biz');
         expect(res.body.email).to.be.include('@');
         expect(res.body.email).to.be.a('string');
        });
    };

    beforeEach(() => {
        validarStatus();
    })

    it('Deve retornar apenas um usuario', () => {
        retornarUsuario();
    });
});