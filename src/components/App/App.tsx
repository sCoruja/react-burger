import React from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import appStyles from "./App.module.css";

function App() {
  const [ingridients, setIngridients] = React.useState();
  const [hasError, setError] = React.useState(false);
  React.useEffect(() => {
    const url = "https://norma.nomoreparties.space/api/ingredients";
    fetch(url)
      .then((response) => {
        if (response.ok) 
          return response.json();
        return Promise.reject(`Ошибка ${response.status}`);
      })
      .then((data) => {
        setIngridients(data.data);
      })
      .catch((e) => {
        console.log("Что-то пошло не так...");
        setError(true);
      });
  }, []);
  return (
    <>
      <AppHeader />
      <section className={appStyles.container}>
        <h2 className="text text_type_main-large">Соберите бургер</h2>
        {hasError && <p>Что то пошло не так...</p>}
        {ingridients && (
          <div className={appStyles.grid}>
            <BurgerIngredients ingridients={ingridients} />
            <BurgerConstructor />
          </div>
        )}
      </section>
    </>
  );
}

export default App;
