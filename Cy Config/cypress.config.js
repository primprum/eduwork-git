const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // trying to solve timeout problem while accessing saucedemo.com
  // tested by using Electron, it uses Chrome engine.
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
