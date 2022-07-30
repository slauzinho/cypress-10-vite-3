import HellWorld from '../../src/components/HelloWorld.vue';

describe('HelloWorld.cy.ts', () => {
  it('playground', () => {
    cy.mount(HellWorld);
    cy.get('h1').should('contain', 'Vite + Vue');
  });
});
