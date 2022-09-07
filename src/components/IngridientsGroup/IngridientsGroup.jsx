import React from "react";
import PropTypes from "prop-types";
import IngridientCard from "../IngridientCard/IngridientCard";
import ingridientsGroupStyles from "./IngridientsGroup.module.css";
const IngridientsGroup = (props) => {
  return (
    <div className="mt-10">
      <h2 className={ingridientsGroupStyles.heading}>{props.heading}</h2>
      <div className={ingridientsGroupStyles.group}>
        {props.items.map((item, index) => (
          <IngridientCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};
IngridientsGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};
export default IngridientsGroup;
