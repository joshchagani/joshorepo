import { getGreeting } from '../support/app.po';

describe('joshua-chagani-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should have a header with my name', () => {
    cy.get('[data-test=headline]').contains('Joshua Chagani');
  });

  it('should have a canvas', () => {
    cy.get('[data-test=canvas]').should('be.visible');
  });

  it('should NOT diplay github link', () => {
    cy.get('[data-test=github-link]').should('not.be.visible');
  });

  it('should NOT diplay linkedin link', () => {
    cy.get('[data-test=linkedin-link]').should('not.be.visible');
  });

  it('should diplay github link', () => {
    cy.scrollTo('bottom');
    cy.get('[data-test=github-link]').should('be.visible');
  });

  it('should diplay linkedin link', () => {
    cy.scrollTo('bottom');
    cy.get('[data-test=linkedin-link]').should('be.visible');
  });
});
