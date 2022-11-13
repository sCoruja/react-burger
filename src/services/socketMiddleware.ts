import type { Middleware, MiddlewareAPI } from "redux";
import {
  IClosedFeedConnectionAction,
  IErrorFeedConnectionAction,
  IGetFeedMessageAction,
  IStartFeedConnectionAction,
  ISuccessFeedConnectionAction,
} from "./actions/feed";
import {
  IClosedProfileConnectionAction,
  IErrorProfileConnectionAction,
  IGetProfileMessageAction,
  IStartProfileConnectionAction,
  ISuccessProfileConnectionAction,
} from "./actions/profile";

import type { TApplicationActions, AppDispatch, RootState } from "./types";
import {  TOrderResponse } from "./types/data";

type wsActionsType = {
  wsInit: () => IStartFeedConnectionAction | IStartProfileConnectionAction;
  onOpen: () => ISuccessFeedConnectionAction | ISuccessProfileConnectionAction;
  onClose: () => IClosedFeedConnectionAction | IClosedProfileConnectionAction;
  onError: (
    payload: Event
  ) => IErrorFeedConnectionAction | IErrorProfileConnectionAction;
  onMessage: (
    payload: TOrderResponse
  ) => IGetFeedMessageAction | IGetProfileMessageAction;
};
export const socketMiddleware = (
  wsUrl: string,
  wsActions: wsActionsType,
  withToken = false
): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TApplicationActions) => {
      const { dispatch, getState } = store;
      const { type } = action;
      const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;
      const token = getState().user.accessToken.split(" ")[1];
      if (type === wsInit().type) {
        const accessToken = withToken ? `?token=${token}` : "";
        socket = new WebSocket(wsUrl + accessToken);
      }
      if (type === onClose().type) {
        socket?.close();
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch(onOpen());
        };

        socket.onerror = (event) => {
          dispatch(onError(event));
        };

        socket.onmessage = (event) => {
          const { data } = event;
          dispatch(onMessage(JSON.parse(data)));
        };
        socket.onclose = (event) => {
          dispatch(onClose());
        };
      }

      next(action);
    };
  }) as Middleware;
};
