import React from "react";
import PropTypes from "prop-types";
import burgerIngriidentsStyles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngridientsGroup from "../IngridientsGroup/IngridientsGroup";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
const BurgerIngredients = (props) => {
  const [current, setCurrent] = React.useState("one");
  const [modalOpened, setModalOpened] = React.useState(false);
  const [currentIngridient, setCurrentIngridient] = React.useState({});
  const buns = props.ingridients.filter((item) => item.type === "bun");
  const sauces = props.ingridients.filter((item) => item.type === "sauce");
  const main = props.ingridients.filter((item) => item.type === "main");
  const toggleModal = (item) => {
    setModalOpened(!modalOpened);
    setCurrentIngridient(item);
  };
  return (
    <>
      <div className={burgerIngriidentsStyles.container}>
        <div className={burgerIngriidentsStyles.tabs}>
          <Tab value="one" active={current === "one"} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === "two"} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === "three"} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
        <div className={burgerIngriidentsStyles.groups}>
          <IngridientsGroup
            heading="Булки"
            items={buns}
            toggleModal={toggleModal}
          />
          <IngridientsGroup
            heading="Соусы"
            items={sauces}
            toggleModal={toggleModal}
          />
          <IngridientsGroup
            heading="Начинки"
            items={main}
            toggleModal={toggleModal}
          />
        </div>
      </div>{" "}
      {modalOpened && (
        <Modal onClose={toggleModal} heading="Детали ингридиента">
          <IngredientDetails data={currentIngridient} />
        </Modal>
      )}
    </>
  );
};

BurgerIngredients.propTypes = {
  ingridients: PropTypes.array.isRequired,
};
export default BurgerIngredients;
