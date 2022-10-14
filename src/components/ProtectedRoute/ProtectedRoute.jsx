import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Redirect, Route, useLocation } from "react-router";
import { Login } from "../../pages";
const ProtectedRoute = ({ children, path, exact }) => {
  const isLogged = useSelector((store) => store.user.isLogged);
  const location = useLocation();
  return (
    <Route to={path} exact={exact}>
      {isLogged ? (
        children
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
};
ProtectedRoute.propTypes = {
  children: PropTypes.element,
  path: PropTypes.string,
  exact: PropTypes.bool,
};
export default ProtectedRoute;
