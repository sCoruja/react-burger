import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import { Login } from "../../pages";

export const ProtectedRoute = ({ children, to }) => {
  const userName = useSelector((store) => store.user.userName);
  return <Route to={to}>{userName ? children : <Login />}</Route>;
};
