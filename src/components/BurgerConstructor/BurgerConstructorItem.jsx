import React, { useRef } from "react";
import constructorStyles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import {
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  REPLACE_CONSTRUCTOR_ITEM,
} from "../../services/actions/cart";
const BurgerConstructorItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleDelete = (index) => {
    dispatch({ type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR, index });
  };
  const [, drag] = useDrag({
    type: "replace",
    item: { index },
  });
  const [{ isHover }, dropRef] = useDrop({
    accept: "replace",
    drop(item) {
      console.log(`Old: ${item.index} New: ${index}`);
      console.log(item.index);
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
      <DragIcon />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={() => handleDelete(index)}
      />
    </div>
  );
};
export default BurgerConstructorItem;
