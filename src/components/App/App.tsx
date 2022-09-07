import React from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import appStyles from "./App.module.css";

function App() {
  return (
    <>
      <AppHeader />
      <section className={appStyles.container}>
        <h2 className="text text_type_main-large">Соберите бургер</h2>
        <div className={appStyles.grid}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </section>
    </>
  );
}

export default App;
