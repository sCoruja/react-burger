import React, { useEffect } from "react";
import { Switch, Route,  } from "react-router-dom";

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
import { getUser, resfreshToken } from "../../services/actions/user";
import { useDispatch, useSelector } from "react-redux";
import  ProtectedRoute  from "../ProtectedRoute/ProtectedRoute";
import { checkToken } from "../../utils/api";
import { getItems } from "../../services/actions/cart";
function App() {
  const localAccessToken = localStorage.getItem("accessToken");
  const localRefreshToken = localStorage.getItem("refreshToken");
  const { accessToken, refreshToken, } = useSelector((store) => store.user);
  const { currentIngredient } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const localCurrentIngredient = localStorage.getItem('currentIngredient');
  useEffect(() => {
    if (localAccessToken && checkToken(localAccessToken.split(" ")[1]))
      dispatch(resfreshToken(localRefreshToken));
    else dispatch(getUser(localAccessToken, localRefreshToken));
  }, [dispatch, localAccessToken, localRefreshToken]);
  useEffect(() => {
    if (accessToken) dispatch(getUser(accessToken, refreshToken));
  }, [accessToken, dispatch, refreshToken]);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
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
        <Route path="/ingredients/:id" exact={true}>
          {localCurrentIngredient || currentIngredient?.name ? <Home /> : <Ingredient />}
        </Route>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default App;
