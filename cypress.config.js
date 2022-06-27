const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');




module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {

      defaultCommandTimeout: 25000,
      //require('cypress-mochawesome-reporter/plugin')(on);



    on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      }); 
    },

    baseUrl: 'https://github.com/',

    defaultCommandTimeout: 25000,
  },
});
    
  


