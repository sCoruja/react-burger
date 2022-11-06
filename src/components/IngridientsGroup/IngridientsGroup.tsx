import React, { FC } from "react";
import IngridientCard from "../IngridientCard/IngridientCard";
import ingridientsGroupStyles from "./IngridientsGroup.module.css";
import { Link, useLocation } from "react-router-dom";
import { TIngredient } from "../../services/types/data";

type TIngridientsGroupProps = {
  heading: string;
  items: Array<TIngredient>;
  refElement: React.MutableRefObject<HTMLHeadingElement | null>;
};

const IngridientsGroup: FC<TIngridientsGroupProps> = ({
  heading,
  items,
  refElement,
}) => {
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
export default IngridientsGroup;
