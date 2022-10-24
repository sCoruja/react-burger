import React, { FC, useRef } from "react";
import PropTypes from "prop-types";
import constructorStyles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import {
  removeIngredient,
  REPLACE_CONSTRUCTOR_ITEM,
} from "../../services/actions/cart";
import { IBurgerConstructorItemProps } from "../../utils/types";
const BurgerConstructorItem : FC<IBurgerConstructorItemProps> = ({ item, index }) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const handleDelete = () => {
    dispatch(removeIngredient(item.uuid));
  };
  const [, drag] = useDrag({
    type: "replace",
    item: { index },
  });
  const [{ isHover }, dropRef] = useDrop({
    accept: "replace",
    drop(item:{index:number}) {
      dispatch({
        type: REPLACE_CONSTRUCTOR_ITEM,
        oldIndex: item.index,
        newIndex: index,
      });
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });
  drag(dropRef(ref));
  return (
    <div
      className={constructorStyles.ingridient + " mt-4 mb-4"}
      ref={ref}
      draggable
      style={isHover ? { opacity: "0.5" } : {}}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={() => handleDelete()}
      />
    </div>
  );
};
export default BurgerConstructorItem;
