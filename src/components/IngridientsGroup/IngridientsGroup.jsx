import React from "react";
import PropTypes from "prop-types";
import IngridientCard from "../IngridientCard/IngridientCard";
import ingridientsGroupStyles from "./IngridientsGroup.module.css";
import { Link } from "react-router-dom";
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
          <Link
            to={`/ingredients/${item._id}`}
            onClick={(e) => e.preventDefault}
            className={ingridientsGroupStyles.link}
            key={item._id}
          >
            <IngridientCard data={item} onClick={() => handleClick(item)} />
          </Link>
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
