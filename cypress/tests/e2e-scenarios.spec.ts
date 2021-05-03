describe("ToDo MVC App - e2e scenarios", () => {
  let testdata: any;
  const startDate: string = Cypress.moment().format("MM/DD/YYYY");

  beforeEach(function () {
    cy.visit("/");
    cy.fixture("test-data-file").then((data) => (testdata = data));
    cy.viewport("iphone-6");
  });

  it("Add new ToDo, Assert item, assert checklist", () => {
    cy.get(".new-todo").should("have.class", "new-todo").type("Learn JavaScript{enter}"); 
    cy.get("label").should("have.text", testdata.text); 
    cy.get(".toggle").should("not.be.checked");
    cy.get(".toggle").click();
    cy.screenshot();
    cy.get(".toggle").should("be.checked");
    cy.get("label").should("have.css", "text-decoration-line", "line-through");
    cy.get(".todo-list").should("have.descendants", "li");
  });
});
