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
import {
  addIngredientAction,
  clearOrderAction,
  makeOrderThunk,
} from "../../services/actions/cart";
import BurgerConstructorItem from "./BurgerConstructorItem";
import Spinner from "../../ui/Spinner/Spinner";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "../../services/hooks";
import { TIngredient } from "../../services/types/data";
const BurgerConstructor = () => {
  const { isLogged, accessToken } = useSelector((store) => store.user);
  const history = useHistory();
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
    drop(item: TIngredient) {
      dispatch(addIngredientAction(item));
    },
  });

  const toggleModal = () => {
    setModalOpened(!modalOpened);
  };
  const closeModal = () => {
    dispatch(clearOrderAction());
    toggleModal();
  };
  const handleClick = () => {
    if (isLogged) {
      const ingredients = [...constructorItems.map((item) => item._id)];
      if (bun?._id) ingredients.push(bun._id, bun._id);
      dispatch(makeOrderThunk(ingredients, accessToken));
      toggleModal();
    } else {
      history.push("/login");
    }
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
                    text={bun.name + " (????????)"}
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
                    text={bun.name + " (??????)"}
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
              ???????????????? ??????????????????????
            </p>
          )}
        </div>

        <div className={constructorStyles.controls + " mt-10"}>
          <span className="price mr-10 text text_type_digits-medium">
            {totalPrice} <CurrencyIcon type="primary" />
          </span>
          <Button
            type="primary"
            size="large"
            onClick={handleClick}
            disabled={!bun}
          >
            ????????????????
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
              <p className="text text_type_main-default">?????????????????? ??????????...</p>
            </div>
          )}
        </Modal>
      )}
    </>
  );
};
export default BurgerConstructor;
