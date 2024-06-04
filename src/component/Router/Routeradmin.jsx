import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Routeradmin = (props) => {
  const isuser = useSelector((state) => state.user.isAuthenticated);
  const isaccount = useSelector((state) => state.user.user);

  if (!isuser || (isaccount && isaccount.role !== "ADMIN")) {
    return <Navigate to="/dangnhap" />;
  }

  return <div>{props.children}</div>;
};

export default Routeradmin;
