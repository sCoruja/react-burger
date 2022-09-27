import React, { useEffect, useRef } from "react";
import burgerIngriidentsStyles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngridientsGroup from "../IngridientsGroup/IngridientsGroup";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  getItems,
  SET_CURRENT_INGREDIENT,
  SWITCH_TAB,
} from "../../services/actions/cart";
const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const { ingredients, ingredientsRequest, currentIngredient, currentTab } =
    useSelector((store) => store.cart);
  const [modalOpened, setModalOpened] = React.useState(false);
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
  const toggleModal = (item) => {
    setModalOpened(!modalOpened);
    dispatch({ type: SET_CURRENT_INGREDIENT, item });
  };
  const switchTab = (tab) => {
    dispatch({ type: SWITCH_TAB, tab });
    refs[tab].ref.current.scrollIntoView();
  };
  const handleScroll = (e) => {
    const rootY = rootRef.current.getBoundingClientRect().y;
    for (var key of Object.keys(refs)) {
      const y = refs[key].ref.current.getBoundingClientRect().y - rootY;
      console.log(refs[key].ref.current.getBoundingClientRect());
      if (y > 0 && y < rootY && currentTab !== refs[key].tab) {
        dispatch({ type: SWITCH_TAB, tab: refs[key].tab });
      }
    }
  };
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  return (
    <>
      <div className={burgerIngriidentsStyles.container}>
        <div className={burgerIngriidentsStyles.tabs} ref={rootRef}>
          <Tab value="bun" active={currentTab === "bun"} onClick={switchTab}>
            Булки
          </Tab>
          <Tab
            value="sauce"
            active={currentTab === "sauce"}
            onClick={switchTab}
          >
            Соусы
          </Tab>
          <Tab value="main" active={currentTab === "main"} onClick={switchTab}>
            Начинки
          </Tab>
        </div>
        {ingredientsRequest ? <p>Загрузка...</p> :(
          <div
            className={burgerIngriidentsStyles.groups}
            onScroll={handleScroll}
          >
            <IngridientsGroup
              heading="Булки"
              tab="bun"
              items={buns}
              refElement={bunsRef}
              toggleModal={toggleModal}
            />
            <IngridientsGroup
              heading="Соусы"
              tab="sauce"
              items={sauces}
              refElement={saucesRef}
              toggleModal={toggleModal}
            />
            <IngridientsGroup
              heading="Начинки"
              tab="main"
              items={main}
              refElement={mainRef}
              toggleModal={toggleModal}
            />
          </div>
        )}
      </div>
      {modalOpened && (
        <Modal onClose={toggleModal} heading="Детали ингридиента">
          <IngredientDetails data={currentIngredient} />
        </Modal>
      )}
    </>
  );
};

export default BurgerIngredients;
