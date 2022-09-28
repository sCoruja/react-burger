import React from "react";
import PropTypes from "prop-types";
import IngridientCard from "../IngridientCard/IngridientCard";
import ingridientsGroupStyles from "./IngridientsGroup.module.css";
const IngridientsGroup = ({ heading, items, refElement, toggleModal }) => {
  const handleClick = (item) => {
    toggleModal(item);
  };
  return (
    <div className="mt-10">
      <h2 className={ingridientsGroupStyles.heading} ref={refElement}>
        {heading}
      </h2>
      <div className={ingridientsGroupStyles.group}>
        {items.map((item) => (
          <IngridientCard
            data={item}
            key={item._id}
            onClick={() => handleClick(item)}
          />
        ))}
      </div>
    </div>
  );
};
IngridientsGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  refElement: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
export default IngridientsGroup;
