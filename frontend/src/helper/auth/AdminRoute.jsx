import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminRoute() {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      {userInfo.role === "admin" ? (
        <Outlet />
      ) : (
        <Navigate to="/register" replace />
      )}
    </>
  );
}
