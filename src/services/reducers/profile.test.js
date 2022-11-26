import { wsProfileReducer } from "./profile";
import {
    WS_PROFILE_CONNECTION_SUCCESS,
    WS_PROFILE_CONNECTION_ERROR,
    WS_PROFILE_CONNECTION_CLOSED,
    WS_PROFILE_GET_MESSAGE,
  } from "../constants";


const initialState = {
    wsConnected: false,
    orders: [],
    total: 0,
    totalToday: 0,
  };

  describe("Feed reducet", () => {
    it("should return initial state", () => {
      expect(wsProfileReducer(undefined, {})).toEqual(initialState);
    });
  
    it("should handle WS_PROFILE_CONNECTION_SUCCESS", () => {
      expect(wsProfileReducer(initialState, { type: WS_PROFILE_CONNECTION_SUCCESS })).toEqual({
        ...initialState,
        error: undefined,
        wsConnected: true,
      });
    });
    it("should handle WS_PROFILE_CONNECTION_ERROR", () => {
      expect(wsProfileReducer(initialState, { type: WS_PROFILE_CONNECTION_ERROR, payload: 'error' })).toEqual({
        ...initialState,
        error: 'error',
        wsConnected: false,
      });
    });
    it("should handle WS_PROFILE_CONNECTION_CLOSED", () => {
      expect(wsProfileReducer(initialState, { type: WS_PROFILE_CONNECTION_CLOSED })).toEqual({
        ...initialState,
        error: undefined,
        wsConnected: false,
      });
    });
    it("should handle WS_PROFILE_GET_MESSAGE", () => {
      expect(wsProfileReducer(initialState, { type: WS_PROFILE_GET_MESSAGE, payload:{total:2, totalToday:1, orders: [1,2,3] } })).toEqual({
        ...initialState,
        error: undefined,
        orders: [1,2,3],
        total: 2,
        totalToday: 1,
      });
    });
  });
    