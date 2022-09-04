import React from "react";
import '@ya.praktikum/react-developer-burger-ui-components'
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import "./App.css";

function App() {
  return (
    <>
      <AppHeader />
      <section className="grid">
        <BurgerIngredients />
      </section>
    </>
  );
}

export default App;