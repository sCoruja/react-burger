import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import { Login } from "../../pages";
const ProtectedRoute = ({ children, path, exact }) => {
  const isLogged = useSelector((store) => store.user.isLogged);
  return <Route to={path} exact={exact}>{isLogged ? children : <Login />}</Route>;
};
ProtectedRoute.propTypes = {
  children: PropTypes.element,
  path: PropTypes.string,
  exact: PropTypes.bool
}
export default ProtectedRoute