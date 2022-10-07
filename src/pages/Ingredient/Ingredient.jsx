import React from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Ingredient.module.css";
import {
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";

export const Ingredient = () => {
  const data = {
    _id: "60666c42cc7b410027a1a9b1",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
  };
  return (
    <>
      <div className={styles.container}>
        <h2 className="text text_type_main-large">Детали ингридиента</h2>
        <IngredientDetails data={data} />
      </div>
    </>
  );
};
