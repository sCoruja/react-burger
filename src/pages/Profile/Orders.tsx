import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  closeProfileConnectionAction,
  startProfileConnectionAction,
} from "../../services/actions/profile";
import { useDispatch, useSelector } from "../../services/hooks";
import { FeedItem } from "../Feed/FeedItem";
import profileStyles from "./Profile.module.css";

export const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startProfileConnectionAction());
    return () => {
      closeProfileConnectionAction();
    };
  }, []);
  const location = useLocation();
  const { orders } = useSelector((store) => store.profile);
  return (
    <div className={profileStyles.orders}>
      {orders
        ?.sort((a, b) => {
          return new Date(a.updatedAt) > new Date(b.updatedAt) ? -1 : 1;
        })
        .map((order) => (
          <Link
            className={profileStyles.orderLink}
            key={order._id}
            to={{
              pathname: `${location.pathname}/${order._id}`,
              state: { background: location },
            }}
          >
            <FeedItem order={order} withStatus={true} />
          </Link>
        ))}
    </div>
  );
};
