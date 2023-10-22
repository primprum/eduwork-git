const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    apiUrl: "http://localhost:3000",
    userEmail: "admin@email.com",
    userPassword: "admin",
  },
});
