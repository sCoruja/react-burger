import React from "react";
import headerStyles from "./AppHeader.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink, useLocation } from "react-router-dom";
const AppHeader = () => {
  const location = useLocation();
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
              <BurgerIcon
                type={location.pathname === "/" ? "primary" : "secondary"}
              />
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
              <ListIcon type={location.pathname === "/feed" ? "primary" : "secondary"} />
              <span className="ml-2">Лента заказов</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link to="/">
        <Logo />
      </Link>
      <div className={headerStyles.logo}></div>
      <NavLink
        className={headerStyles.link + " text text_color_inactive"}
        activeClassName={`${headerStyles.link} ${headerStyles.active} text `}
        to="/profile"
      >
        <ProfileIcon
          type={location.pathname === "/profile" ? "primary" : "secondary"}
        />
        <span className="ml-2">Личный кабинет</span>
      </NavLink>
    </header>
  );
};
export default AppHeader;
