import React from "react";

import { useGetCollegesQuery } from "../../features/college/collegeSlice.js";

export default function Colleges() {
  const { data: colleges, isLoading } = useGetCollegesQuery();

  return (
    <div className="flex mt-10 gap-3">
      {!isLoading &&
        colleges.map((college) => (
          <div className="border px-6 py-3">
            <p className="">{college.name}</p>
            <p className="">{college.location}</p>
          </div>
        ))}
    </div>
  );
}
