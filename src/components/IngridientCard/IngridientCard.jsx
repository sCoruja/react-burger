import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ingridientCardStyles from "./IngridientCard.module.css";
const IngridientCard = (props) => {
  return (
    <div className={ingridientCardStyles.card}>
      <img
        src={props.data.image}
        alt="#"
        className={ingridientCardStyles.image}
      />
      <span className={ingridientCardStyles.price}>
        {props.data.price}<CurrencyIcon /> 
      </span>
      <span className={ingridientCardStyles.name}>{props.data.name}</span>
    </div>
  );
};
export default IngridientCard;
