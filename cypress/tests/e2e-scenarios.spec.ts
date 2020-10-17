describe("Cypress RealWorld App - e2e scenarios", () => {
  let testdata: any;
  const startDate: string = Cypress.moment().format("MM/DD/YYYY");

  beforeEach(function () {
    cy.visit("/");
    cy.fixture("test-data-file").then((data) => (testdata = data));
    // cy.viewport("iphone-6");
  });

  it("Add new ToDo, Assert item, assert checklist", () => {
    cy.get(".new-todo")
      .should("have.class", "new-todo")
      .type("Learn JavaScript{enter}"); //Add item to ToDo list

    cy.get("label").should("have.text", testdata.text); //Assertion: Verifies text of added item using tagname
    cy.get(".toggle").should("not.be.checked"); //Assertion: Verifies the toggle button is unchecked using class-name
    cy.get(".toggle").click(); // MArking todo as completed
    cy.get(".toggle").should("be.checked"); //Assertion: Verifies the toggle button is checked
    cy.get("label").should("have.css", "text-decoration-line", "line-through"); //Assertion: Verifies the item text is strikethrough
    cy.get('.todo-list').should('have.descendants', 'li')
   });
});
