import { getGreeting } from '../support/app.po';

describe('joshua-chagani-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should have a canvas', () => {
    cy.get('[data-test=canvas]').should('be.be.visible');
  });

  it('should diplay github link', () => {
    cy.get('[data-test=github-link]').should('be.be.visible');
  });
});
