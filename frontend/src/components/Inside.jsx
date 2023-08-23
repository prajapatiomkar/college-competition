import React from "react";
import { useSelector } from "react-redux";

export default function Inside() {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div>
      <p className="text-2xl">Welcome, {userInfo.name}</p>
      <p className="pt-1">Privilege = {userInfo.role}</p>
    </div>
  );
}
