///<reference types="cypress" />
describe('user', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Product Search by Order Number', () => {
        cy.get('input#\\:r0\\:').should('exist');
        cy.get('input#\\:r0\\:').type('123456');
        cy.get('input#\\:r1\\:').should('exist');
        cy.get('input#\\:r1\\:').type('d@cosa.com');
        cy.get('button[type="submit"]').click();
        cy.get('.flex.flex-col.gap-4.border-solid.border-grey-3')  // Selecciona el contenedor principal que contiene los elementos de la lista de productos
        .should('exist')  // Verifica que el contenedor exista en la página
        .children('.sc-dtInlm.hjZkTt')  // Selecciona todos los elementos hijos que representan cada producto en la lista
            .should('have.length', 2);  // Verifica que haya exactamente dos elementos que representen dos productos en la lista

    })
    
    it('Product Search by bad email', () => {
        cy.get('input#\\:r0\\:').should('exist');
        cy.get('input#\\:r0\\:').type('123456');
        cy.get('input#\\:r1\\:').should('exist');
        cy.get('input#\\:r1\\:').type('d@cosa');
        cy.get('button[type="submit"]').click();
        cy.get('p#\\:r1\\:-helper-text').should('exist');
    })
})