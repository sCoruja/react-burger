import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { wsFeedReducer } from "./feed";
import { wsProfileReducer } from "./profile";
import { userReducer } from "./user";
export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  feed: wsFeedReducer,
  profile: wsProfileReducer
});
