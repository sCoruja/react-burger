import React, { MouseEvent, useEffect } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/actions/user";
import { Route, Switch, useHistory } from "react-router";
import { Form } from "./Form";
import { Orders } from "./Orders";
import { NavLink } from "react-router-dom";
import { IState, IUserState } from "../../utils/types";

export const Profile = () => {
  const { refreshToken, isLogged } = useSelector<IState, IUserState>(
    (store) => store.user
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(logout(refreshToken));
    localStorage.clear();
  };

  useEffect(() => {
    if (!isLogged) history.push("/login");
  }, [isLogged, history]);
  return (
    <section className={styles.section}>
      <aside className={styles.menu}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              to="/profile"
              className={(isActive) =>
                styles.link + " text text_type_main-medium "
              }
              activeClassName={
                styles.link +
                " text text_type_main-medium text_color_primary " +
                styles.active
              }
              exact={true}
            >
              Профиль
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              className={styles.link + " text text_type_main-medium "}
              activeClassName={
                styles.link +
                " text text_type_main-medium text_color_primary " +
                styles.active
              }
              exact={true}
              to="/profile/orders"
            >
              История заказов
            </NavLink>
          </li>
          <li className={styles.item}>
            <a
              className={
                styles.link + " text text_type_main-medium text_color_inactive"
              }
              href="#"
              onClick={handleLogout}
            >
              Выход
            </a>
          </li>
        </ul>
        <p
          className={
            styles.text + " text text_type_main-default text_color_inactive"
          }
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </aside>
      <main>
        <Switch>
          <Route path="/profile" exact={true}>
            <Form />
          </Route>
          <Route path="/profile/orders" exact={true}>
            <Orders />
          </Route>
        </Switch>
      </main>
    </section>
  );
};
