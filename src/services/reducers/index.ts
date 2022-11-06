import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { userReducer } from "./user";
export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
