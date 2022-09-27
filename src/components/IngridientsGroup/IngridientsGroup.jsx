import React from "react";
import PropTypes from "prop-types";
import IngridientCard from "../IngridientCard/IngridientCard";
import ingridientsGroupStyles from "./IngridientsGroup.module.css";
const IngridientsGroup = (props) => {
  const toggleModal = (item) => {
    props.toggleModal(item);
  };
  return (
    <>
      <div className="mt-10">
        <h2 className={ingridientsGroupStyles.heading} ref={props.refElement}>
          {props.heading}
        </h2>
        <div className={ingridientsGroupStyles.group}>
          {props.items.map((item) => (
            <IngridientCard
              data={item}
              key={item._id}
              onClick={() => toggleModal(item)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
IngridientsGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};
export default IngridientsGroup;
