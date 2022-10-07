import React from "react";
import {Switch, Route } from "react-router-dom";

import "@ya.praktikum/react-developer-burger-ui-components";
import {
  Home,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  Ingredient,
  Profile,
} from "../../pages";
import AppHeader from "../AppHeader/AppHeader";
function App() {
  return (
    <>
    <AppHeader />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        <Route path="/register" exact={true}>
          <Register />
        </Route>
        <Route path="/forgot-password" exact={true}>
          <ForgotPassword />
        </Route>
        <Route path="/reset-password" exact={true}>
          <ResetPassword />
        </Route>
        <Route path="/ingredients" exact={true}>
          <Ingredient />
        </Route>
        <Route path="/profile" exact={true}>
          <Profile />
        </Route>
      </Switch>
    </>
  );
}

export default App;
