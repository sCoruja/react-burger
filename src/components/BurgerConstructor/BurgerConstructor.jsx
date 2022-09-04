import React from "react";
import constructorStyles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingridients from "../../utils/data";
const BurgerConstructor = (props) => {
  return (
    <div className={constructorStyles.container}>
      <div className={constructorStyles.ingridient + " mt-4 mb-4"}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={ingridients[0].image}
        />
      </div>
      <div className="ingridients">
        <div className={constructorStyles.ingridient + " mt-4 mb-4"}>
          <DragIcon />
          <ConstructorElement
            text="Краторная котлета N-200i (верх)"
            price={200}
            thumbnail={ingridients[2].image}
          />
        </div>
        <div className={constructorStyles.ingridient + " mt-4 mb-4"}>
          <DragIcon />
          <ConstructorElement
            text="Краторная котлета N-200i (верх)"
            price={200}
            thumbnail={ingridients[2].image}
          />
        </div>
      </div>
      <div className={constructorStyles.ingridient + " mt-4 mb-4"}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={ingridients[0].image}
        />
      </div>
      <div className={constructorStyles.controls + " mt-10"}>
        <span className="price mr-10 text text_type_digits-medium">600 <CurrencyIcon/></span>
        <Button type="primary" size="large">
          Заказать
        </Button>
      </div>
    </div>
  );
};
export default BurgerConstructor;
