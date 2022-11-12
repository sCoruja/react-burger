import {
  WS_FEED_CONNECTION_START,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_GET_MESSAGE,
} from "../constants";
import { TOrderResponse } from "../types/data";

export interface IStartFeedConnectionAction {
  readonly type: typeof WS_FEED_CONNECTION_START;
}

export interface ISuccessFeedConnectionAction {
  readonly type: typeof WS_FEED_CONNECTION_SUCCESS;
}

export interface IErrorFeedConnectionAction {
  readonly type: typeof WS_FEED_CONNECTION_ERROR;
  readonly payload: Event;
}

export interface IClosedFeedConnectionAction {
  readonly type: typeof WS_FEED_CONNECTION_CLOSED;
}

export interface IGetFeedMessageAction {
  readonly type: typeof WS_FEED_GET_MESSAGE;
  readonly payload: TOrderResponse;
}

export type TWSFeedActions =
  | IStartFeedConnectionAction
  | ISuccessFeedConnectionAction
  | IErrorFeedConnectionAction
  | IClosedFeedConnectionAction
  | IGetFeedMessageAction;

export const startFeedConnectionAction = (): IStartFeedConnectionAction => ({
  type: WS_FEED_CONNECTION_START,
});
export const successFeedConnectionAction = (): ISuccessFeedConnectionAction => ({
  type: WS_FEED_CONNECTION_SUCCESS,
});
export const errorFeedConnectionAction = (
  payload: Event
): IErrorFeedConnectionAction => ({
  type: WS_FEED_CONNECTION_ERROR,
  payload,
});
export const closeFeedConnectionAction = (): IClosedFeedConnectionAction => ({
  type: WS_FEED_CONNECTION_CLOSED,
});
export const getFeedMessageAction = (payload: TOrderResponse): IGetFeedMessageAction => ({
  type: WS_FEED_GET_MESSAGE,
  payload,
});
