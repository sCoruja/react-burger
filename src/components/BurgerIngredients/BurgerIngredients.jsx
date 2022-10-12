import React, { useEffect, useRef } from "react";
import burgerIngriidentsStyles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngridientsGroup from "../IngridientsGroup/IngridientsGroup";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentIngredient,
  switchTab,
} from "../../services/actions/cart";
import { useHistory } from "react-router";
const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const {
    ingredients,
    ingredientsRequest,
    currentIngredient,
    currentTab,
  } = useSelector((store) => store.cart);

  const localCurrentIngredient = localStorage.getItem("currentIngredient");
  const [modalOpened, setModalOpened] = React.useState(false);
  const buns = ingredients.filter((item) => item.type === "bun");
  const sauces = ingredients.filter((item) => item.type === "sauce");
  const main = ingredients.filter((item) => item.type === "main");
  const history = useHistory();
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
  const showModal = (item) => {
    setModalOpened(true);
    dispatch(setCurrentIngredient(item));
    history.replace(`/ingredients/${item._id}`);
    localStorage.setItem("currentIngredient", item._id);
  };
  const hideModal = () => {
    setModalOpened(false);
    dispatch(setCurrentIngredient(undefined));
    localStorage.setItem("currentIngredient", "");
    history.replace("/");
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
  useEffect(() => {
    if (localCurrentIngredient && ingredients.length) {
      const currentItem = ingredients.find(
        (item) => (item._id === localCurrentIngredient)
      );
      showModal(currentItem);
    }
  }, [localCurrentIngredient, ingredients]);
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
              toggleModal={showModal}
            />
            <IngridientsGroup
              heading="Соусы"
              tab="sauce"
              items={sauces}
              refElement={saucesRef}
              toggleModal={showModal}
            />
            <IngridientsGroup
              heading="Начинки"
              tab="main"
              items={main}
              refElement={mainRef}
              toggleModal={showModal}
            />
          </div>
        )}
      </div>
      {modalOpened && (
        <Modal onClose={hideModal} heading="Детали ингридиента">
          <IngredientDetails data={currentIngredient} />
        </Modal>
      )}
    </>
  );
};

export default BurgerIngredients;
