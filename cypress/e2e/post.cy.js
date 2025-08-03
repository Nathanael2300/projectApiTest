import { base, faker } from '@faker-js/faker';

let data = {
    email: faker.internet.email(),
    FirstName: faker.name.firstName(), LastName: faker.name.lastName(),

}
describe('POST /users - criar um novo usuario', () => {

    const baseUrl = ('https://jsonplaceholder.typicode.com/users');

    const criarUsuario = () => {
        let body = {
            name: `${data.FirstName} ${data.LastName}`,
            email: data.email
        };
        cy.api({
            method: 'POST',
            url: baseUrl,
            body: body
        }).then((res) => {
            expect(res.status).to.be.equal(201);
            expect(res.body).to.have.property('id');
            expect(res.body.id).to.be.a('number');
            expect(res.body).to.have.property('name', `${data.FirstName} ${data.LastName}`);
            expect(res.body.name).to.be.a('string');
            expect(res.body).to.have.property('email', data.email);
            expect(res.body.email).to.be.include('@');
            expect(res.body.email).to.be.a('string');
        });
    };

    beforeEach(() => {
        cy.validarStatusAPI(baseUrl)
    });

    it('Deve criar novo usuario com sucesso', () => {
        criarUsuario();
    });
});