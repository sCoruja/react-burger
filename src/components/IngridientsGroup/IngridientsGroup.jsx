import React from "react";
import PropTypes from "prop-types";
import IngridientCard from "../IngridientCard/IngridientCard";
import ingridientsGroupStyles from "./IngridientsGroup.module.css";
import { Link, useLocation } from "react-router-dom";
const IngridientsGroup = ({ heading, items, refElement }) => {
  const location = useLocation();
  return (
    <div className="mt-10">
      <h2 className={ingridientsGroupStyles.heading} ref={refElement}>
        {heading}
      </h2>
      <div className={ingridientsGroupStyles.group}>
        {items.map((item) => (
          <Link
            to={{
              pathname: `/ingredients/${item._id}`,
              state: { background: location },
            }}
            className={ingridientsGroupStyles.link}
            key={item._id}
          >
            <IngridientCard data={item} />
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
};
export default IngridientsGroup;
