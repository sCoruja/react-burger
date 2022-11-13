import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import { convertTime } from "../../services/datetime";
import { useSelector } from "../../services/hooks";
import { TBurgerOrder } from "../../services/types/data";
import feedStyles from "./Feed.module.css";
type FeedItemProps = {
  order: TBurgerOrder;
  withStatus?: boolean;
};

export const FeedItem: FC<FeedItemProps> = ({ order, withStatus = false }) => {
  const date = convertTime(order.createdAt);
  const { ingredients } = useSelector((store) => store.cart);
  const ingredientsSet = Array.from(new Set(order.ingredients));
  const totalPrice = order.ingredients.reduce((acc, item) => {
    const ingredient = ingredients.find((i) => i._id === item);
    return acc + (ingredient ? ingredient.price : 0);
  }, 0);
  const status =
    order.status === "done"
      ? "Выполнен"
      : order.status === "pending"
      ? "Готовится"
      : "Создан";
  return (
    <div className={feedStyles.order}>
      <div className={feedStyles.info}>
        <span className="text text_color_primary text_type_digits-default">
          #{order.number}
        </span>
        <span className="text text_color_inactive text_type_default">
          {date}
        </span>
      </div>
      <h4 className="text text_color_primary text_type_main-medium">
        {order.name}
      </h4>
      {withStatus && (
        <p
          className={`text text_color_${
            order.status === "done" ? "success" : "primary"
          } text_type_default mt-2`}
        >
          {status}
        </p>
      )}
      <div className={feedStyles.ingredients}>
        <div className={feedStyles.images}>
          {ingredientsSet.map((ingr, index) => {
            const ingredient = ingredients.find((i) => i._id === ingr);
            return index < 6 ? (
              ingredientsSet.length > 6 && index === 5 ? (
                <div className={feedStyles.imageCounter} key={index}>
                  <div className={feedStyles.imageBorder}>
                    <span className="text text_color_primary text_type_digits-default">
                      +{ingredientsSet.length - 6}
                    </span>
                    <img
                      src={ingredient?.image_mobile}
                      alt={ingredient?.name}
                      className={feedStyles.image}
                    />
                  </div>
                </div>
              ) : (
                <div className={feedStyles.imageBorder} key={index}>
                  <img
                    src={ingredient?.image_mobile}
                    alt={ingredient?.name}
                    className={feedStyles.image}
                  />
                </div>
              )
            ) : null;
          })}
        </div>
        <span className={`text text_type_digits-default ${feedStyles.price}`}>
          {totalPrice} <CurrencyIcon type="primary" />
        </span>
      </div>
    </div>
  );
};
