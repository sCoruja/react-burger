import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

import { compose } from "redux";
import { socketMiddleware } from "./socketMiddleware";
import {
  closeFeedConnectionAction,
  errorFeedConnectionAction,
  getFeedMessageAction,
  startFeedConnectionAction,
  successFeedConnectionAction,
} from "./actions/feed";
import {
  closeProfileConnectionAction,
  errorProfileConnectionAction,
  getProfileMessageAction,
  startProfileConnectionAction,
  successProfileConnectionAction,
} from "./actions/profile";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const wsFeedActions = {
  wsInit: startFeedConnectionAction,
  onOpen: successFeedConnectionAction,
  onClose: closeFeedConnectionAction,
  onError: errorFeedConnectionAction,
  onMessage: getFeedMessageAction,
};
const wsProfileActions = {
  wsInit: startProfileConnectionAction,
  onOpen: successProfileConnectionAction,
  onClose: closeProfileConnectionAction,
  onError: errorProfileConnectionAction,
  onMessage: getProfileMessageAction,
};
const wsFeedMiddleware = socketMiddleware(
  "wss://norma.nomoreparties.space/orders/all",
  wsFeedActions
);
const wsProfileMiddleware = socketMiddleware(
  "wss://norma.nomoreparties.space/orders",
  wsProfileActions,
  true
);

const enhancer = composeEnhancers(
  applyMiddleware(thunk, wsFeedMiddleware, wsProfileMiddleware)
);
export const store = createStore(rootReducer, enhancer);
