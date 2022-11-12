import React from "react";
import headerStyles from "./AppHeader.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
const AppHeader = () => {
  return (
    <header className={headerStyles.header + " pb-4 pt-4"}>
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.list}>
          <li className={headerStyles.item}>
            <NavLink
              to="/"
              className={`text ${headerStyles.link} text_color_inactive `}
              activeClassName={`text ${headerStyles.link} ${headerStyles.active} `}
              exact={true}
            >
              <BurgerIcon type="primary" />
              <span className="ml-2">Конструктор</span>
            </NavLink>
          </li>
          <li className={headerStyles.item}>
            <NavLink
              to="/feed"
              className={`text ${headerStyles.link} text_color_inactive `}
              activeClassName={`text ${headerStyles.link} ${headerStyles.active} `}
              exact={true}
            >
              <ListIcon type="secondary" />
              <span className="ml-2">Лента заказов</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Logo />
      <div className={headerStyles.logo}></div>
      <NavLink
        className={headerStyles.link + " text text_color_inactive"}
        activeClassName={`${headerStyles.link} ${headerStyles.active} text `}
        to="/profile"
      >
        <ProfileIcon type="secondary" />
        <span className="ml-2">Личный кабинет</span>
      </NavLink>
    </header>
  );
};
export default AppHeader;
