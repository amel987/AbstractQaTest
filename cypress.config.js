const { defineConfig } = require("cypress");



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      defaultCommandTimeout: 25000


      // implement node event listeners here
    },
    
    baseUrl: 'https://github.com/',

  },
});
