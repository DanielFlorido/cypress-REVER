///<reference types="cypress" />

describe('user', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.fixture('data').as('iban');
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
        cy.login('123456','d@cosa.com');
        cy.get('.flex.flex-col.gap-4.border-solid.border-grey-3')  
            .should('exist') 
            .children('.sc-dtInlm.hjZkTt') 
            .first()
            .click();
        cy.get('.overflow-y-scroll')  
            .contains('p', 'Too small')     
            .click();  
        cy.get('.react-responsive-modal-container.react-responsive-modal-containerCenter')
        .should('exist').scrollTo('bottom');
        cy.get('.mb-8.mt-4.flex.w-full.flex-col.content-center.items-center')  
            .find('#reason-continue-button') 
            .click();  
        cy.get('button#item-selection-continue-button')
            .click();
        cy.scrollTo('bottom');
        cy.get('button#returnAddressContinue')
            .click();
        cy.scrollTo('bottom');
        cy.get('button#refundMethodContinue')
            .click();
        cy.get('button#returnMethodContinue')
            .click();
        cy.get('@iban').then(iban => {
            cy.get('input#iban').type(iban.iban);
        })
        cy.get('button#ibanComplete')
            .click();
    })
})