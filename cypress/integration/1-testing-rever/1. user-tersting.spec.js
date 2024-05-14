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
        cy.get('.flex.flex-col.gap-4.border-solid.border-grey-3')  
            .should('exist') 
            .children('.sc-dtInlm.hjZkTt') 
            .should('have.length', 2);  

    })
    
    it('Product Search by bad email', () => {
        cy.get('input#\\:r0\\:').should('exist');
        cy.get('input#\\:r0\\:').type('123456');
        cy.get('input#\\:r1\\:').should('exist');
        cy.get('input#\\:r1\\:').type('d@cosa');
        cy.get('button[type="submit"]').click();
        cy.get('p#\\:r1\\:-helper-text').should('exist');
    })

    it('Management of Physical Returns and Size Exchanges', ()=> {
        cy.visit('/');
        cy.login('cosas','cosas');
    })
})