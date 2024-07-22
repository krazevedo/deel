const { defineConfig } = require('cypress');

module.exports = defineConfig({
  includeShadowDom: true,
  pageLoadTimeout: 10000,
  defaultCommandTimeout: 5000,
  video: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Deel Cypress Test',
    reportsDir: 'cypress/reports/',
    embeddedScreenshots: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://growth.deel.training/dev/',
  },
});
