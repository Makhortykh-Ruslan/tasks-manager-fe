describe('Authentication', () => {
  it('redirects unauthenticated user to login page', () => {
    cy.visit('/');
    cy.url().should('include', '/auth/login');

    cy.get('[data-cy="login-input"]').should('exist');
    cy.get('[data-cy="password-input"]').should('exist');
    cy.get('[data-cy="sign-in-btn"]').should('exist');
  });

  it('logs in with valid credentials', () => {
    cy.visit('/auth/login');

    cy.get('[data-cy="login-input"]').type(
      Cypress.env('TEST_USER_LOGIN'),
    );
    cy.get('[data-cy="password-input"]').type(
      Cypress.env('TEST_USER_PASSWORD'),
    );

    cy.get('[data-cy="sign-in-btn"]').click();

    cy.url().should('include', '/user/notes');
  });

  it('does not log in with invalid credentials', () => {
    cy.visit('/auth/login');

    cy.get('[data-cy="login-input"]').type('hello@gmail.com');
    cy.get('[data-cy="password-input"]').type('Hello1234!');
    cy.get('[data-cy="sign-in-btn"]').click();

    cy.get('[data-cy="alert"]').should('exist');

    cy.url().should('include', '/auth/login');
  });
});
