import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import TokenContext from "./context/TokenContext";

const PrivateRoute = ({ component }) => {
  const location = useLocation();
  const token = useContext(TokenContext);
  return token ? (
    component
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
