const getRandomDate = (start = new Date(2000, 0, 1), end = new Date()) => {
  const startDate = start.getTime();
  const endDate = end.getTime();
  const randomDate = new Date(
    startDate + Math.random() * (endDate - startDate)
  );
  return randomDate.toISOString().split("T")[0];
};

Cypress.Commands.add("typeRandomDate", (fieldSelector) => {
  let randomDate;

  switch (fieldSelector) {
    case "#introduced":
      randomDate = getRandomDate();
      break;
    case "#discontinued":
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const fiveYearsLater = new Date();
      fiveYearsLater.setFullYear(fiveYearsLater.getFullYear() + 5);
      randomDate = getRandomDate(tomorrow, fiveYearsLater);
      break;
    default:
      randomDate = getRandomDate();
  }

  cy.get(fieldSelector).type(randomDate);
});

Cypress.Commands.add("typeRandomDates", () => {
  const introducedDate = getRandomDate();
  const discontinuedDate = getRandomDate(new Date(introducedDate));

  cy.get("#introduced").type(introducedDate);
  cy.get("#discontinued").type(discontinuedDate);
});

describe("Computer Database - Testes positivos e negativos", () => {
  it("Deve criar um novo computador com dados válidos", () => {
    cy.visit("https://computer-database.gatling.io/computers");

    cy.contains("Add a new computer").click();
    cy.get("#name").type("Cypress Test Computer");
    cy.typeRandomDate("#introduced");
    cy.typeRandomDate("#discontinued");
    cy.get("#company").select("Apple Inc.");

    cy.get(".primary").click();

    cy.contains("Computer has been created").should("be.visible");
  });

  it("Deve encontrar um computador existente pelo nome", () => {
    cy.visit("https://computer-database.gatling.io/computers");

    cy.get("#searchbox").type("ACE");
    cy.get("#searchsubmit").click();

    cy.contains("ACE").should("be.visible");
  });

  it("Deve mostrar um erro ao tentar criar um computador sem nome", () => {
    cy.visit("https://computer-database.gatling.io/computers");

    cy.contains("Add a new computer").click();
    cy.typeRandomDates();
    cy.get("#company").select("Apple Inc.");

    cy.get(".primary").click();

    cy.get(".clearfix.error")
      .should("contain", "Computer name")
      .and("be.visible");
  });

  it("Deve criar um computador com datas sequenciais válidas", () => {
    cy.visit("https://computer-database.gatling.io/computers");

    cy.contains("Add a new computer").click();
    cy.get("#name").type("Sequential Dates Test");
    cy.typeRandomDates();
    cy.get("#company").select("Apple Inc.");

    cy.get(".primary").click();

    cy.contains("Computer Sequential Dates Test has been created").should(
      "be.visible"
    );
  });
});
