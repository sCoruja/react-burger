import React, { useMemo } from "react";
import constructorStyles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredient,
  clearOrder,
  makeOrder,
} from "../../services/actions/cart";
import BurgerConstructorItem from "./BurgerConstructorItem";
import Spinner from "../../ui/Spinner/Spinner";
const BurgerConstructor = () => {
  const [modalOpened, setModalOpened] = React.useState(false);
  const dispatch = useDispatch();
  const { constructorItems, bun, order } = useSelector((store) => store.cart);
  const totalPrice = useMemo(() => {
    const bunPrice = bun ? bun?.price * 2 : 0;
    const price =
      bunPrice +
      constructorItems.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
    return price ? price : 0;
  }, [constructorItems, bun]);
  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      dispatch(addIngredient(item));
    },
  });

  const toggleModal = () => {
    setModalOpened(!modalOpened);
  };
  const closeModal = () => {
    dispatch(clearOrder());
    toggleModal();
  };
  const handleClick = () => {
    const ingredients = [...constructorItems.map((item) => item._id)];
    if (bun?._id) ingredients.push(bun._id);
    dispatch(makeOrder(ingredients));
    toggleModal();
  };

  return (
    <>
      <div className={constructorStyles.container}>
        <div className={constructorStyles.items} ref={dropTarget}>
          {" "}
          {bun?._id || constructorItems.length > 0 ? (
            <>
              <div className={constructorStyles.bun + " mt-4 mb-4"}>
                {bun && (
                  <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={bun.name + " (верх)"}
                    price={bun.price}
                    thumbnail={bun.image}
                  />
                )}
              </div>
              <div className={constructorStyles.ingredients}>
                {constructorItems &&
                  constructorItems.map((item, index) => (
                    <BurgerConstructorItem
                      item={item}
                      index={index}
                      key={item.uuid}
                    />
                  ))}
              </div>
              <div className={constructorStyles.bun + " mt-4 mb-4"}>
                {bun && (
                  <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={bun.name + " (низ)"}
                    price={bun.price}
                    thumbnail={bun.image}
                  />
                )}
              </div>
            </>
          ) : (
            <p
              className={
                constructorStyles.text + " text text_type_digits-small"
              }
            >
              Добавьте ингридиенты
            </p>
          )}
        </div>

        <div className={constructorStyles.controls + " mt-10"}>
          <span className="price mr-10 text text_type_digits-medium">
            {totalPrice} <CurrencyIcon />
          </span>
          <Button
            type="primary"
            size="large"
            onClick={handleClick}
            disabled={!bun}
          >
            Заказать
          </Button>
        </div>
      </div>
      {modalOpened && (
        <Modal onClose={closeModal}>
          {order?.order ? (
            <OrderDetails identifier={order?.order.number} />
          ) : (
            <div className={constructorStyles.loading}>
              <Spinner size={"medium"} />
              <p className="text text_type_main-default">Оформляем заказ...</p>
            </div>
          )}
        </Modal>
      )}
    </>
  );
};
export default BurgerConstructor;
