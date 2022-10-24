import React, { useRef } from "react";
import burgerIngriidentsStyles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngridientsGroup from "../IngridientsGroup/IngridientsGroup";
import { useDispatch, useSelector } from "react-redux";
import { switchTab } from "../../services/actions/cart";
import { ICartState, IState,IRefsType } from "../../utils/types";

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const { ingredients, ingredientsRequest, currentTab } = useSelector<
    IState,
    ICartState
  >((store) => store.cart);

  const buns = ingredients.filter((item) => item.type === "bun");
  const sauces = ingredients.filter((item) => item.type === "sauce");
  const main = ingredients.filter((item) => item.type === "main");
  const rootRef = useRef<HTMLDivElement>(null);
  const bunsRef = useRef<HTMLHeadingElement>(null);
  const saucesRef = useRef<HTMLHeadingElement>(null);
  const mainRef = useRef<HTMLHeadingElement>(null);
  const refs: IRefsType = {
    bun: bunsRef,
    sauce: saucesRef,
    main: mainRef,
  };

  const handleTabClick = (tab: string) => {
    dispatch(switchTab(tab));
    refs[tab].current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleScroll = () => {
    const rootY = rootRef?.current?.getBoundingClientRect().y ?? 0;
    for (let [key,value] of Object.entries(refs)) {
      if(value){
      const y = value.current?.getBoundingClientRect().y ?? 0- rootY;
      if (y > 0 && y < rootY && currentTab !== key) {
        dispatch(switchTab(key));
      }}
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
              items={buns}
              refElement={bunsRef}
            />
            <IngridientsGroup
              heading="Соусы"
              items={sauces}
              refElement={saucesRef}
            />
            <IngridientsGroup
              heading="Начинки"
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
