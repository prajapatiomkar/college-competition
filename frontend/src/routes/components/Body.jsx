import React from "react";

import { useSelector } from "react-redux";
import Home from "./Home";
import Colleges from "../../features/college/Colleges";

export default function Body() {
  const { userInfo } = useSelector((state) => state.auth);

  return <>{userInfo ? <Colleges /> : <Home />}</>;
}
