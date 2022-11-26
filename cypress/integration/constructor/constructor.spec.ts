/// <reference types="cypress" />

const LOGIN = "strigocoruja@yandex.ru";
const PASSWORD = "qwerty";

describe("service is available", function () {
  it("should be available on localhost:3000", function () {
    cy.visit("http://localhost:3000");
    cy.contains("Соберите бургер");
  });

  // constructor contain added ingredient`s title
  it("should add ingredient to cart", () => {
    cy.get("[class^=IngridientCard_card__]").first().as("ingredient");
    cy.get("[class^=BurgerConstructor_items__]").as("cart");
    cy.get("@ingredient").trigger("dragstart");
    cy.get("@cart").trigger("drop");
    cy.get("@ingredient")
      .get("[class^=IngridientCard_name__")
      .then((elem) => {
        const text = elem[0].textContent;
        cy.get("@cart").should("contain", text);
      });
  });
  it("should open ingredient details modal", () => {
    cy.get("[class^=IngridientCard_card__]").first().as("ingredient");
    cy.get("@ingredient").click();
    cy.get("#react-modals").contains("Детали ингредиента");
    cy.get("@ingredient")
      .get("[class^=IngridientCard_name__")
      .then((elem) => {
        const text = elem[0].textContent;
        cy.get("[class^=Modal_modal__]")
          // .should("contain", "Детали ингредиента")
          .should("contain", text);
      });
  });
  it("should close ingredient modal", () => {
    cy.get("[class^=Modal_modal__").trigger("keyup", { key: "Escape" });
    cy.get("#react-modals").contains("Детали ингредиента").should("not.exist");
  });
  it(
    "should open order details modal",
    { defaultCommandTimeout: 20000 },
    () => {
      cy.get("[class^=BurgerConstructor_controls__]").get("button").click();
      //redirecting to login page
      cy.get("input[name=email]").type(LOGIN);
      cy.get("input[name=password]").type(PASSWORD);
      cy.get("button").click();
      //redirecting to constructor page
      cy.get("[class^=BurgerConstructor_controls__]").get("button").click();
      cy.get("[class^=OrderDetails_container__]").contains(
        "идентификатор заказа"
      );
    }
  );
});
