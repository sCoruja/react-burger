import React from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Ingredient.module.css";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";

export const Ingredient = () => {
  return (
    <div className={styles.container}>
      <h2 className="text text_type_main-large">Детали ингридиента</h2>
      <IngredientDetails />
    </div>
  );
};
