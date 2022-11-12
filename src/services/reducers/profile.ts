import { TWSProfileActions } from "../actions/profile";
import {
  WS_PROFILE_CONNECTION_SUCCESS,
  WS_PROFILE_CONNECTION_ERROR,
  WS_PROFILE_CONNECTION_CLOSED,
  WS_PROFILE_GET_MESSAGE,
} from "../constants";
import { TBurgerOrder } from "../types/data";

export type TWSProfileState = {
  wsConnected: boolean;
  orders: TBurgerOrder[];
  total: number;
  totalToday: number;
  error?: Event;
};

const initialState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const wsProfileReducer = (state = initialState, action: TWSProfileActions) => {
  switch (action.type) {
    case WS_PROFILE_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };
    case WS_PROFILE_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };
    case WS_PROFILE_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };
    case WS_PROFILE_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    default:
      return state;
  }
};
