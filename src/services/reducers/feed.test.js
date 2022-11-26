import { wsFeedReducer } from "./feed";
import {
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_GET_MESSAGE,
} from "../constants";

const initialState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
};
describe("Feed reducet", () => {
  it("should return initial state", () => {
    expect(wsFeedReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle WS_FEED_CONNECTION_SUCCESS", () => {
    expect(wsFeedReducer(initialState, { type: WS_FEED_CONNECTION_SUCCESS })).toEqual({
      ...initialState,
      error: undefined,
      wsConnected: true,
    });
  });
  it("should handle WS_FEED_CONNECTION_ERROR", () => {
    expect(wsFeedReducer(initialState, { type: WS_FEED_CONNECTION_ERROR, payload: 'error' })).toEqual({
      ...initialState,
      error: 'error',
      wsConnected: false,
    });
  });
  it("should handle WS_FEED_CONNECTION_CLOSED", () => {
    expect(wsFeedReducer(initialState, { type: WS_FEED_CONNECTION_CLOSED })).toEqual({
      ...initialState,
      error: undefined,
      wsConnected: false,
    });
  });
  it("should handle WS_FEED_GET_MESSAGE", () => {
    expect(wsFeedReducer(initialState, { type: WS_FEED_GET_MESSAGE, payload:{total:2, totalToday:1, orders: [1,2,3] } })).toEqual({
      ...initialState,
      error: undefined,
      orders: [1,2,3],
      total: 2,
      totalToday: 1,
    });
  });
});
