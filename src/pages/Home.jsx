import React from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";
import appStyles from "../components/App/App.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const Home = () => {
  return (
    <>
      <section className={appStyles.container}>
        <h2 className="text text_type_main-large">Соберите бургер</h2>
        <div className={appStyles.grid}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </div>
      </section>
    </>
  );
}

