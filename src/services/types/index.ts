import PropTypes from "prop-types";
import * as H from "history";
import { store } from "../store";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { TCartActions } from "../actions/cart";
import { TUserActions } from "../actions/user";
import { TIngredient, TOrder } from "./data";

export const ingridientType = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export interface ILocationState {
  background?: H.Location;
}

export interface ICartState {
  ingredients: Array<TIngredient>;
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;

  currentIngredient?: TIngredient;

  constructorItems: Array<TIngredient>;
  bun?: TIngredient;
  order?: TOrder;
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

export interface IFormType {
  [key: string]: string;
}

// При таком определении типа, тип редьюсера user определяется как never
// export type RootState = ReturnType<typeof store.getState>;

export type RootState = { cart: ICartState; user: IUserState };

type TApplicationActions = TCartActions | TUserActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;
export type AppDispatch = typeof store.dispatch;
