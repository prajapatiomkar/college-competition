import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function DashboardScreen() {
  return (
    <div className="">
      <div className="border py-5 px-2">
        <Link to={"/dashboard/create-college"} className="button">
          Create College
        </Link>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
