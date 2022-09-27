import React from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import appStyles from "./App.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <>
      <AppHeader />
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

export default App;
