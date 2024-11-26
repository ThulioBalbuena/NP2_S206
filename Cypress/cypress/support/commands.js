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
