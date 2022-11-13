import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  closeFeedConnectionAction,
  startFeedConnectionAction,
} from "../../services/actions/feed";
import { useDispatch, useSelector } from "../../services/hooks";
import feedStyles from "./Feed.module.css";
import { FeedItem } from "./FeedItem";

export const Feed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startFeedConnectionAction());
    return () => {
      dispatch(closeFeedConnectionAction());
    };
  }, []);
  const location = useLocation();
  const { orders, total, totalToday } = useSelector((store) => store.feed);
  const ready = orders.filter((order) => order.status === "done").slice(0, 12);
  const pending = orders
    .filter((order) => order.status !== "done")
    .slice(0, 12);
  return (
    <div className={feedStyles.container}>
      <h2 className="text text_type_main-large mb-5">Лента заказов</h2>
      <div className={feedStyles.content}>
        <div className={feedStyles.feed}>
          {orders.map((order) => (
            <Link
              className={feedStyles.link}
              key={order._id}
              to={{
                pathname: `/feed/${order._id}`,
                state: { background: location },
              }}
            >
              <FeedItem order={order} />
            </Link>
          ))}
        </div>
        <div className={feedStyles.digits}>
          <div className={feedStyles.row}>
            <div className={feedStyles.column}>
              <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
              <ul className={feedStyles.list}>
                {ready.map((order, index) => (
                  <li
                    className="text text_color_success text_type_digits-default"
                    key={index}
                  >
                    {order.number}
                  </li>
                ))}
              </ul>
            </div>
            <div className={feedStyles.column}>
              <h3 className="text text_type_main-medium mb-6">В работе:</h3>
              <ul className={feedStyles.list}>
                {pending.map((order, index) => (
                  <li
                    className="text text_color_primary text_type_digits-default"
                    key={index}
                  >
                    {order.number}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={feedStyles.column}>
            <h3 className="text text_type_main-medium">
              Выполнено за все время:
            </h3>
            <p className="text text_type_digits-large">{total}</p>
          </div>
          <div className={feedStyles.column}>
            <h3 className="text text_type_main-medium">
              Выполнено за сегодня:
            </h3>
            <p className="text text_type_digits-large">{totalToday}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
