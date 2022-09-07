import React from "react";
import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import ingridientCardStyles from "./IngridientCard.module.css";
const IngridientCard = (props) => {
  return (
    <div className={ingridientCardStyles.card}>
      <Counter count={1} size="default" />
      <img
        src={props.data.image}
        alt={props.data.name}
        className={ingridientCardStyles.image}
      />
      <span className={ingridientCardStyles.price + ' text text_type_digits-default mt-1 mb-1'}>
        {props.data.price}  <CurrencyIcon /> 
      </span>
      <span className={ingridientCardStyles.name + " text text_type_main-small"}>{props.data.name}</span>
    </div>
  );
};
IngridientCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}
export default IngridientCard;
