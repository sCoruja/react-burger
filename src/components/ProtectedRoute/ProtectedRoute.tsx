import React, { FC } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps, useLocation } from "react-router";
import { IState, IUserState } from "../../utils/types";
const ProtectedRoute: FC<RouteProps> = ({ children, path, exact }) => {
  const { isLogged } = useSelector<IState, IUserState>((store) => store.user);
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
