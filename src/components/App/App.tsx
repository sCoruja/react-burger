import React, { useEffect } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
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
import { getUserThunk, resfreshTokenThunk } from "../../services/actions/user";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { checkToken } from "../../services/api";
import { getIngredientsThunk } from "../../services/actions/cart";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

import { ILocationState } from "../../services/types";
import { useDispatch, useSelector } from "../../services/hooks";

function App() {
  const location = useLocation<ILocationState>();
  const history = useHistory();
  const background = location.state && location.state.background;
  const localAccessToken = localStorage.getItem("accessToken") || "";
  const localRefreshToken = localStorage.getItem("refreshToken") || "";
  const { accessToken, refreshToken } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localAccessToken && checkToken(localAccessToken.split(" ")[1]))
      dispatch(resfreshTokenThunk(localRefreshToken));
    else dispatch(getUserThunk(localAccessToken, localRefreshToken));
  }, [dispatch, localAccessToken, localRefreshToken]);
  useEffect(() => {
    if (accessToken) dispatch(getUserThunk(accessToken, refreshToken));
  }, [accessToken, dispatch, refreshToken]);

  useEffect(() => {
    dispatch(getIngredientsThunk());
  }, [dispatch]);
  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
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
          <Ingredient />
        </Route>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
      </Switch>

      {background && (
        <Route path="/ingredients/:id" exact={true}>
          <Modal
            onClose={() => {
              history.push("/");
            }}
            heading="Детали ингридиента"
          >
            <IngredientDetails />
          </Modal>
        </Route>
      )}
    </>
  );
}

export default App;
