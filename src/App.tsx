import React from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import "./App.css";

function App() {
  return (
    <>
      <AppHeader />
      <section className="container">
        <h2 className="text text_type_main-large">Соберите бургер</h2>
        <div className="grid">
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </section>
    </>
  );
}

export default App;
