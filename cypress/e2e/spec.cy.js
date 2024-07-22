import selectors from './selectors';

describe('Salary Insights', () => {
  beforeEach(() => {
    cy.visit('salary-insights');
  });
  it('check salary insights for roles and countries', () => {
    cy.fixture('example.json').then((data) => {
      data.forEach((item) => {
        const { role, country, low, median, high } = item;
        cy.get(selectors.combobox).first().click();
        cy.focused().type(role);
        cy.get(selectors.combobox).first().next().click();
        cy.wait(2000);

        cy.focused().realPress('ArrowDown');
        cy.focused().realPress('ArrowDown');
        cy.realPress('Enter');

        cy.get(selectors.combobox).last().click();
        cy.focused().type(country);
        cy.wait(500);
        cy.focused().realPress('ArrowDown');
        cy.focused().realPress('ArrowDown');
        cy.realPress('Enter');

        cy.get(selectors.button).contains('Search').click();

        cy.get(selectors.resultCombobox).first().should('have.text', role);
        cy.get(selectors.resultCombobox).eq(1).should('have.text', country);

        cy.get(selectors.dataSalaryResult)
          .find('h2')
          .should('contain.text', `${role} compensation in ${country}`);

        cy.contains('LOW').prev().should('have.text', low);
        cy.contains('MEDIAN').prev().should('have.text', median);
        cy.contains('HIGH').prev().should('have.text', high);
      });
    });
  });
});
