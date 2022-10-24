import PropTypes from "prop-types";
import * as H from "history";

export const ingridientType = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export interface ILocationState {
  background?: H.Location;
}
export interface IIngredientType {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  uuid?: string;
}
export interface IOrderType {
  name: string;
  order: {
    number: number;
  };
  success: boolean;
}
export interface ICartState {
  ingredients: Array<IIngredientType>;
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;

  currentIngredient: IIngredientType;

  constructorItems: Array<IIngredientType>;
  bun: IIngredientType;
  order: IOrderType;
  orderRequest: boolean;
  orderFailed: boolean;
  currentTab: "bun" | "main" | "sauce";
}

export interface IUserState {
  isLogged: boolean;
  userName: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  forgotPasswordRequest: boolean;
  forgotPasswordFailed: boolean;
  resetPasswordRequest: boolean;
  resetPasswordFailed: boolean;
  registerRequest: boolean;
  registerFailed: boolean;
  loginRequest: boolean;
  loginFailed: boolean;
  logoutRequest: boolean;
  logoutFailed: boolean;
  getUserRequest: boolean;
  getUserFailed: boolean;
  updateUserRequest: boolean;
  updateUserFailed: boolean;
  refreshTokenRequest: boolean;
  refreshTokenFailed: boolean;
}
export interface IState {
  cart: ICartState;
  user: IUserState;
}
export interface IBurgerConstructorItemProps {
  item: IIngredientType;
  index: number;
}
export interface IRefsType {
  [key: string]: React.MutableRefObject<HTMLElement | null>;
}
export interface IIngridientCardProps {
  data: IIngredientType;
}

export interface IIngridientsGroupProps {
  heading: string;
  items: Array<IIngredientType>;
  refElement: React.MutableRefObject<HTMLHeadingElement | null>;
}

export interface IModalProps {
  heading?: string;
  onClose: () => void;
}
export interface IModalOverlayProps {
  onClick: () => void;
}
export interface IOrderDetailsProps {
  identifier: number;
}
export interface IFormType{
  [key:string]: string;
}