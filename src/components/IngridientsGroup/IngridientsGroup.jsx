import React from "react";
import PropTypes from "prop-types";
import IngridientCard from "../IngridientCard/IngridientCard";
import ingridientsGroupStyles from "./IngridientsGroup.module.css";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
const IngridientsGroup = (props) => {
  const [modalOpened, setModalOpened] = React.useState(false);
  const [currentIngridient, setCurrentIngridient] = React.useState({});
  const toggleModal = (item) => {
    setModalOpened(!modalOpened);
    setCurrentIngridient(item);
  };
  return (
    <>
      <div className="mt-10">
        <h2 className={ingridientsGroupStyles.heading}>{props.heading}</h2>
        <div className={ingridientsGroupStyles.group}>
          {props.items.map((item, index) => (
            <IngridientCard
              data={item}
              key={item._id}
              onClick={() => toggleModal(item)}
            />
          ))}
        </div>
      </div>

      {modalOpened && (
        <Modal onClose={toggleModal} heading="Детали ингридиента">
          <IngredientDetails data={currentIngridient} />
        </Modal>
      )}
    </>
  );
};
IngridientsGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};
export default IngridientsGroup;
