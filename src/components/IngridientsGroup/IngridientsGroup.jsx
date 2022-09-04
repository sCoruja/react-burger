import React from "react";
import IngridientCard from "../IngridientCard/IngridientCard";
import ingridientsGroupStyles from "./IngridientsGroup.module.css";
const IngridientsGroup = (props) => {
  return (
    <>
      <h2 className={ingridientsGroupStyles.heading}>{props.heading}</h2>
      <div className={ingridientsGroupStyles.group}>
      {props.items.map((item) => (
          <IngridientCard data={item}/>
      ))}
      </div>
    </>
  );
};
export default IngridientsGroup;
