import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Router = (props) => {
  const isuser = useSelector((state) => state.user.isAuthenticated);
  if (!isuser) {
    return <Navigate to="/dangnhap"></Navigate>;
  }
  return <div>{props.children}</div>;
};

export default Router;
