import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./components/App/App";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./services/store";

const root = document.getElementById("root");
render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
