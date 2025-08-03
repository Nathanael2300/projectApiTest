import { faker } from '@faker-js/faker';

let data = {
    email: faker.internet.email(),
    FirstName: faker.name.firstName(), LastName: faker.name.lastName(),

}

describe('PUT /users/id:1 - Atualizar dados do usuario', () => {
    const baseUrl = ('https://jsonplaceholder.typicode.com/users')

    const validarStatus = () => {
        cy.validarStatusAPI(baseUrl);
    }

    const atualizarUsuario = () => {
        const userUpdate = {
            name: `${data.FirstName} ${data.LastName}`,
            email: data.email
        }
        cy.api({
            method: 'PUT',
            url: baseUrl + '/1',
            body: userUpdate
        }).then((res) => {
            expect(res.status).to.be.equal(200);
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
        validarStatus();
    });

    it('Deve atualizar dados do usuario', () => {
        atualizarUsuario();
    });
});