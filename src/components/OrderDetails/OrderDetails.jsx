import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import orderDetailsStyles from "./OrderDetails.module.css";

const OrderDetails = (props) => {
  return (
    <div className={orderDetailsStyles.container + " mt-10"}>
      <p
        className={
          orderDetailsStyles.digits + " text text_type_digits-large mb-8"
        }
      >
        {props.identifier}
      </p>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <div className={orderDetailsStyles.cirlce + " mt-15 mb-15"}>
        <CheckMarkIcon />
      </div>
      <p className="text text_type_main-small mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-small  text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};
export default OrderDetails;
