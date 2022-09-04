import React from "react";
import IngridientCard from "../IngridientCard/IngridientCard";
import ingridientsGroupStyles from "./IngridientsGroup.module.css";
const IngridientsGroup = (props) => {
  return (
    <div className="mt-10">
      <h2 className={ingridientsGroupStyles.heading}>{props.heading}</h2>
      <div className={ingridientsGroupStyles.group}>
      {props.items.map((item) => (
          <IngridientCard data={item}/>
      ))}
      </div>
    </div>
  );
};
export default IngridientsGroup;
