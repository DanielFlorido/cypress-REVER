///<reference types="cypress" />
describe('user', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('try', () => {
        cy.get('label[for=":r0:"]').should('exist');
        cy.get('label[for=":r0:"]').type('hello');
    })     
})