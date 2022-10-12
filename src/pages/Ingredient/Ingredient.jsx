import React from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Ingredient.module.css";
import {} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export const Ingredient = () => {
  const {id} = useParams();
  const ingredient = useSelector((store) => store.cart.ingredients).find(item=> item._id === id);
  return (
    <>
      <div className={styles.container}>
        <h2 className="text text_type_main-large">Детали ингридиента</h2>
        {ingredient && <IngredientDetails data={ingredient} />}
      </div>
    </>
  );
};
