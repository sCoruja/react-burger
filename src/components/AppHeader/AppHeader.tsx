import React from "react";
import headerStyles from "./AppHeader.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
const AppHeader = () => {
  return (
    <header className={headerStyles.header + " pb-4 pt-4"}>
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.list}>
          <li className={headerStyles.item}>
            <a
              href="#"
              className={`${headerStyles.link} ${headerStyles.active} text `}
            >
              <BurgerIcon type="primary" />
              <span className="ml-2">Конструктор</span>
            </a>
          </li>
          <li className={headerStyles.item}>
            <a
              href="#"
              className={headerStyles.link + " text text_color_inactive"}
            >
              <ListIcon type="secondary" />
              <span className="ml-2">Лента заказов</span>
            </a>
          </li>
        </ul>
      </nav>
      <Logo />
      <div className={headerStyles.logo}></div>
      <a href="#" className={headerStyles.link + " text text_color_inactive"}>
        <ProfileIcon type="secondary" />
        <span className="ml-2">Личный кабинет</span>
      </a>
    </header>
  );
};
export default AppHeader;
