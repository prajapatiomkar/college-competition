import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function DashboardScreen() {
  return (
    <div className="">
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
