import React, { FC, useRef } from "react";
import constructorStyles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import {
  removeIngredientAction,
  replaceIngredientAction,
} from "../../services/actions/cart";
import { TIngredient } from "../../services/types/data";
import { useDispatch } from "../../services/hooks";

type TBurgerConstructorItemProps = {
  item: TIngredient;
  index: number;
};

const BurgerConstructorItem: FC<TBurgerConstructorItemProps> = ({
  item,
  index,
}) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const handleDelete = () => {
    dispatch(removeIngredientAction(item.uuid));
  };
  const [, drag] = useDrag({
    type: "replace",
    item: { index },
  });
  const [{ isHover }, dropRef] = useDrop({
    accept: "replace",
    drop(item: { index: number }) {
      dispatch(replaceIngredientAction(item.index, index));
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
