import PropTypes from "prop-types";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingridientCardStyles from "./IngridientCard.module.css";
import { ingridientType } from "../../utils/types";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
const IngridientCard = ({ data }) => {
  const { bun, constructorItems } = useSelector((store) => store.cart);
  const count =
    data.type === "bun"
      ? bun?._id === data._id
        ? 2
        : 0
      : constructorItems.reduce((acc, item) => {
          return item._id === data._id ? acc + 1 : acc;
        }, 0);
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: data,
  });
  return (
    <div className={ingridientCardStyles.card} ref={dragRef} draggable>
      {count ? <Counter count={count} size="default" /> : ""}
      <img
        src={data.image}
        alt={data.name}
        className={ingridientCardStyles.image}
        draggable={false}
      />
      <span
        className={
          ingridientCardStyles.price +
          " text text_type_digits-default mt-1 mb-1"
        }
      >
        {data.price} <CurrencyIcon />
      </span>
      <span
        className={ingridientCardStyles.name + " text text_type_main-small"}
      >
        {data.name}
      </span>
    </div>
  );
};
IngridientCard.propTypes = {
  data: PropTypes.shape(ingridientType).isRequired,
};
export default IngridientCard;
