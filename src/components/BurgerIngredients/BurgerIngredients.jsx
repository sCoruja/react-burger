import React from "react";
import PropTypes from "prop-types";
import burgerIngriidentsStyles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngridientsGroup from "../IngridientsGroup/IngridientsGroup";
const BurgerIngredients = (props) => {
  const [current, setCurrent] = React.useState("one");
  console.log(props);
  const buns = props.ingridients.filter((item) => item.type === "bun");
  const sauces = props.ingridients.filter((item) => item.type === "sauce");
  const main = props.ingridients.filter((item) => item.type === "main");
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

BurgerIngredients.propTypes = {
  ingridients: PropTypes.array.isRequired,
};
export default BurgerIngredients;
