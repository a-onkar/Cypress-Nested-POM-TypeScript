
// Import commands.js using ES2015 syntax:
import './commands';
import addContext from "mochawesome/addContext";
// Alternatively you can use CommonJS syntax:
// require('./commands')
import 'cypress-xpath';
import 'cypress-plugin-tab';

Cypress.on("test:after:run", (test, runnable) => {
    if (test.state === "failed") {
      const screenshot = `assets/${Cypress.spec.name}/${runnable.parent!.title} - ${test.title} (failed).png`;
      addContext({ test }, screenshot);
    }
  });