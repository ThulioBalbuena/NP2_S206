describe('Computer Database - Testes positivos e negativos', () => {
  
    it('Deve criar um novo computador com dados válidos', () => {
      cy.visit('https://computer-database.gatling.io/computers');
  
      cy.contains('Add a new computer').click();
      cy.get('#name').type('Cypress Test Computer');
      cy.get('#introduced').type('2023-01-01');
      cy.get('#discontinued').type('2025-01-01');
      cy.get('#company').select('Apple Inc.');
  
      cy.get('.primary').click();
  
      cy.contains('Computer has been created').should('be.visible');
    });
  
    it('Deve encontrar um computador existente pelo nome', () => {
      cy.visit('https://computer-database.gatling.io/computers');
  
      cy.get('#searchbox').type('ACE');
      cy.get('#searchsubmit').click();
  
      cy.contains('ACE').should('be.visible');
    });

    it('Deve mostrar um erro ao tentar criar um computador sem nome', () => {
      cy.visit('https://computer-database.gatling.io/computers');
  
      cy.contains('Add a new computer').click();
  
      cy.get('#introduced').type('2023-01-01');
      cy.get('#discontinued').type('2025-01-01');
      cy.get('#company').select('Apple Inc.');

      cy.get('.primary').click();
  
      cy.get('.clearfix.error').should('contain', 'Computer name').and('be.visible');
    });
  
  });
  