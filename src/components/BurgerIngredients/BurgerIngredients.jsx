import React from "react";
import burgerIngriidentsStyles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngridientsGroup from "../IngridientsGroup/IngridientsGroup";
import ingridients from "../../utils/data";
const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState("one");
  const buns = ingridients.filter((item) => item.type === "bun");
  const sauces = ingridients.filter((item) => item.type === "sauce");
  const main = ingridients.filter((item) => item.type === "main");
  return (
    <div className={burgerIngriidentsStyles.container}>
      <div className={burgerIngriidentsStyles.tabs}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={burgerIngriidentsStyles.groups}>
        <IngridientsGroup heading="Булки" items={buns} />
        <IngridientsGroup heading="Соусы" items={sauces} />
        <IngridientsGroup heading="Начинки" items={main} />
      </div>
    </div>
  );
};
export default BurgerIngredients;
