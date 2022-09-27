import PropTypes from "prop-types";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingridientCardStyles from "./IngridientCard.module.css";
import { ingridientType } from "../../utils/types";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
const IngridientCard = (props) => {
  const { bun, constructorItems } = useSelector((store) => store.cart);
  const count =
    props.data.type === "bun"
      ? bun?._id === props.data._id
        ? 2
        : 0
      : constructorItems.reduce((acc, item) => {
          return item._id === props.data._id ? acc + 1 : acc;
        }, 0);
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: props.data,
  });
  return (
    <div
      className={ingridientCardStyles.card}
      onClick={props.onClick}
      ref={dragRef}
      draggable
    >
      {count ? <Counter count={count} size="default" /> : ""}
      <img
        src={props.data.image}
        alt={props.data.name}
        className={ingridientCardStyles.image}
        draggable={false}
      />
      <span
        className={
          ingridientCardStyles.price +
          " text text_type_digits-default mt-1 mb-1"
        }
      >
        {props.data.price} <CurrencyIcon />
      </span>
      <span
        className={ingridientCardStyles.name + " text text_type_main-small"}
      >
        {props.data.name}
      </span>
    </div>
  );
};
IngridientCard.propTypes = {
  data: PropTypes.shape(ingridientType).isRequired,
};
export default IngridientCard;
