import React from "react";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-32 ">
      <p className="text-2xl"> Welcome to the college competition portal.</p>
      <div className="mt-6">
        <Link className=" button" to="/register">
          {" "}
          Get Started 🚀
        </Link>
      </div>
    </div>
  );
}
