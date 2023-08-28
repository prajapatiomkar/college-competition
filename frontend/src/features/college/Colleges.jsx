import React from "react";

import { useGetCollegesQuery } from "./collegeSlice.js";
import { Link } from "react-router-dom";
import { GoLinkExternal } from "react-icons/go";
export default function Colleges() {
  const { data: colleges, isLoading, isSuccess } = useGetCollegesQuery();

  return (
    <div className="flex gap-3">
      {isSuccess && colleges.length === 0 ? (
        <div className="w-full text-center p-20 text-2xl">
          College List Empty
        </div>
      ) : (
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="table-style-head rounded-tl rounded-bl">
                College
              </th>
              <th className="table-style-head">
                Location
              </th>
              <th className="table-style-head">
                Visit
              </th>
            </tr>
          </thead>
          {isSuccess &&
            colleges.map((college) => (
              <tbody key={college._id}>
                <tr className="border px-6 py-3">
                  <td className="px-4 py-3">
                    <Link>
                      <span className="font-medium"></span> {college.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    {" "}
                    <span className="font-medium"></span> {college.location}
                  </td>
                  <td className="px-4 py-3">
                    <Link to={`/college/${college._id}`}>
                      <GoLinkExternal />
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      )}
    </div>
  );
}
