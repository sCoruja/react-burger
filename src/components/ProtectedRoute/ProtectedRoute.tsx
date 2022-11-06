import React, { FC } from "react";
import PropTypes from "prop-types";
import { Redirect, Route, RouteProps, useLocation } from "react-router";
import { useSelector } from "../../services/hooks";

const ProtectedRoute: FC<RouteProps> = ({ children, path, exact }) => {
  const { isLogged } = useSelector((store) => store.user);
  const location = useLocation();
  return (
    <Route path={path} exact={exact}>
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
