import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ admin }) => {
  let auth = false;

  if (admin) {
    let adminAuth = true;
    // let adminAuth = false;
    if (adminAuth) auth = true;
  } else {
    // let userAuth = false;
    let userAuth = true;
    if (userAuth) auth = true;
  }

  return auth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
