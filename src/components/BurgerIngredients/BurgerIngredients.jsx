import React, {  useRef } from "react";
import burgerIngriidentsStyles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngridientsGroup from "../IngridientsGroup/IngridientsGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  switchTab,
} from "../../services/actions/cart";
const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const {
    ingredients,
    ingredientsRequest,
    currentTab,
  } = useSelector((store) => store.cart);

  const buns = ingredients.filter((item) => item.type === "bun");
  const sauces = ingredients.filter((item) => item.type === "sauce");
  const main = ingredients.filter((item) => item.type === "main");
  const rootRef = useRef();
  const bunsRef = useRef();
  const saucesRef = useRef();
  const mainRef = useRef();
  const refs = {
    bun: {
      tab: "bun",
      ref: bunsRef,
    },
    sauce: {
      tab: "sauce",
      ref: saucesRef,
    },
    main: {
      tab: "main",
      ref: mainRef,
    },
  };

  const handleTabClick = (tab) => {
    dispatch(switchTab(tab));
    refs[tab].ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll = (e) => {
    const rootY = rootRef.current.getBoundingClientRect().y;
    for (var key of Object.keys(refs)) {
      const y = refs[key].ref.current.getBoundingClientRect().y - rootY;
      if (y > 0 && y < rootY && currentTab !== refs[key].tab) {
        dispatch(switchTab(refs[key].tab));
      }
    }
  };

  return (
    <>
      <div className={burgerIngriidentsStyles.container}>
        <div className={burgerIngriidentsStyles.tabs} ref={rootRef}>
          <Tab
            value="bun"
            active={currentTab === "bun"}
            onClick={handleTabClick}
          >
            Булки
          </Tab>
          <Tab
            value="sauce"
            active={currentTab === "sauce"}
            onClick={handleTabClick}
          >
            Соусы
          </Tab>
          <Tab
            value="main"
            active={currentTab === "main"}
            onClick={handleTabClick}
          >
            Начинки
          </Tab>
        </div>
        {ingredientsRequest ? (
          <p>Загрузка...</p>
        ) : (
          <div
            className={burgerIngriidentsStyles.groups}
            onScroll={handleScroll}
          >
            <IngridientsGroup
              heading="Булки"
              tab="bun"
              items={buns}
              refElement={bunsRef}
            />
            <IngridientsGroup
              heading="Соусы"
              tab="sauce"
              items={sauces}
              refElement={saucesRef}
            />
            <IngridientsGroup
              heading="Начинки"
              tab="main"
              items={main}
              refElement={mainRef}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default BurgerIngredients;
