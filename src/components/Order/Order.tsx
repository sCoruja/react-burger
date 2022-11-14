import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router";
import {
  closeFeedConnectionAction,
  startFeedConnectionAction,
} from "../../services/actions/feed";
import {
  closeProfileConnectionAction,
  startProfileConnectionAction,
} from "../../services/actions/profile";
import { convertTime } from "../../services/datetime";
import { useDispatch, useSelector } from "../../services/hooks";
import orderStyles from "./Order.module.css";
export const Order = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const dispatch = useDispatch();
  const { ingredients } = useSelector((store) => store.cart);
  const { isLogged } = useSelector((store) => store.user);
  const isProfilePage = location.pathname.includes("profile");
  const { orders } = useSelector((store) =>
    isProfilePage ? store.profile : store.feed
  );
  useEffect(() => {
    if (!orders?.length && (isLogged || !isProfilePage)) {
      const wsAction = isProfilePage
        ? startProfileConnectionAction
        : startFeedConnectionAction;
      dispatch(wsAction());
      return () => {
        const wsCloseAction = isProfilePage
          ? closeProfileConnectionAction
          : closeFeedConnectionAction;
        wsCloseAction();
      };
    }
  }, [isLogged]);
  const order = useMemo(() => orders?.find((order) => order._id === id), [
    orders,
  ]);
  const totalPrice = useMemo(
    () =>
      order?.ingredients.reduce((acc, item) => {
        const ingredient = ingredients.find((i) => i._id === item);
        return acc + (ingredient ? ingredient.price : 0);
      }, 0),
    [orders]
  );

  const status = useMemo(
    () =>
      order?.status === "done"
        ? "Выполнен"
        : order?.status === "pending"
        ? "Готовится"
        : "Создан",
    [orders]
  );
  const ordersSet = useMemo(() => new Set(order?.ingredients), [orders]);
  return order ? (
    <div className={orderStyles.order}>
      <p
        className={`text text_color_primary text_type_digits-default mb-10 ${orderStyles.number}`}
      >
        #{order.number}
      </p>
      <h2 className="text text_color_primary text_type_main-medium mb-3">
        {order.name}
      </h2>
      <p
        className={`text text_color_${
          order.status === "done" ? "success" : "primary"
        } text_type_default mb-15`}
      >
        {status}
      </p>
      <p className="text text_color_primary text_type_main-medium mb-6">
        Состав:
      </p>
      <div className={orderStyles.ingredients}>
        {Array.from(ordersSet).map((ingr, index) => {
          const ingredient = ingredients.find((i) => i._id === ingr);
          const count = order.ingredients.filter((i) => i === ingr).length;
          return (
            <div className={orderStyles.ingredientRow} key={ingredient?._id}>
              <div className={orderStyles.imageBorder}>
                <img
                  src={ingredient?.image_mobile}
                  alt={ingredient?.name}
                  className={orderStyles.image}
                />
              </div>
              <span className="text text_color_primary text_type_main-default ml-4">
                {ingredient?.name}
              </span>
              <span
                className={`text text_color_primary text_type_digits-default pl-4 ${orderStyles.price}`}
              >
                {count} x {ingredient?.price} <CurrencyIcon type="primary" />
              </span>
            </div>
          );
        })}
      </div>
      <div className={orderStyles.footer}>
        <span className="text text_color_inactive text_type_main-default">
          {convertTime(order.createdAt)}
        </span>
        <span
          className={
            "text text_color_primary text_type_digits-default " +
            orderStyles.totalPrice
          }
        >
          {totalPrice} <CurrencyIcon type="primary" />
        </span>
      </div>
    </div>
  ) : (
    <div className={orderStyles.order}>
      <p
        className={`text text_color_primary text_type_main-medium mb-10 ${orderStyles.number}`}
      >
        Загрузка...
      </p>
    </div>
  );
};
