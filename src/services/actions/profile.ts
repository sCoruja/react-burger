import {
  WS_PROFILE_CONNECTION_START,
  WS_PROFILE_CONNECTION_SUCCESS,
  WS_PROFILE_CONNECTION_ERROR,
  WS_PROFILE_CONNECTION_CLOSED,
  WS_PROFILE_GET_MESSAGE,
} from "../constants";
import { TOrderResponse } from "../types/data";

export interface IStartProfileConnectionAction {
  readonly type: typeof WS_PROFILE_CONNECTION_START;
}

export interface ISuccessProfileConnectionAction {
  readonly type: typeof WS_PROFILE_CONNECTION_SUCCESS;
}

export interface IErrorProfileConnectionAction {
  readonly type: typeof WS_PROFILE_CONNECTION_ERROR;
  readonly payload: Event;
}

export interface IClosedProfileConnectionAction {
  readonly type: typeof WS_PROFILE_CONNECTION_CLOSED;
}

export interface IGetProfileMessageAction {
  readonly type: typeof WS_PROFILE_GET_MESSAGE;
  readonly payload: TOrderResponse;
}

export type TWSProfileActions =
  | IStartProfileConnectionAction
  | ISuccessProfileConnectionAction
  | IErrorProfileConnectionAction
  | IClosedProfileConnectionAction
  | IGetProfileMessageAction;

export const startProfileConnectionAction = (): IStartProfileConnectionAction => ({
  type: WS_PROFILE_CONNECTION_START,
});
export const successProfileConnectionAction = (): ISuccessProfileConnectionAction => ({
  type: WS_PROFILE_CONNECTION_SUCCESS,
});
export const errorProfileConnectionAction = (
  payload: Event
): IErrorProfileConnectionAction => ({
  type: WS_PROFILE_CONNECTION_ERROR,
  payload,
});
export const closeProfileConnectionAction = (): IClosedProfileConnectionAction => ({
  type: WS_PROFILE_CONNECTION_CLOSED,
});
export const getProfileMessageAction = (
  payload: TOrderResponse
): IGetProfileMessageAction => ({
  type: WS_PROFILE_GET_MESSAGE,
  payload,
});
