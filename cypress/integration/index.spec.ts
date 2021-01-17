describe("Index page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be able to render the counter component", () => {
    cy.get('[data-testid="count"').should("have.text", "0");
    cy.get('[data-testid="increment-button"]').should("exist");
    cy.get('[data-testid="decrement-button"]').should("exist");
  });

  it("should be able to increment the counter", () => {
    cy.get('[data-testid="increment-button"').click();
    cy.get('[data-testid="count"').should("have.text", "1");

    cy.get('[data-testid="increment-button"').click();
    cy.get('[data-testid="increment-button"').click();
    cy.get('[data-testid="count"').should("have.text", "3");
  });
  it("should be able to decrement the counter", () => {
    cy.get('[data-testid="decrement-button"').click();
    cy.get('[data-testid="count"').should("have.text", "-1");

    cy.get('[data-testid="decrement-button"').click();
    cy.get('[data-testid="decrement-button"').click();
    cy.get('[data-testid="count"').should("have.text", "-3");
  });
});

export {};
