import React from "react";

import { useGetCollegesQuery } from "../../features/college/collegeSlice.js";
import { Link } from "react-router-dom";
import { GoLinkExternal } from "react-icons/go";
export default function Colleges() {
  const { data: colleges, isLoading } = useGetCollegesQuery();

  return (
    <div className="flex mt-10 gap-3">
      {!isLoading && colleges.length === 0 ? (
        <div className="w-full text-center p-20 text-2xl">
          College List Empty
        </div>
      ) : (
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                College
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Location
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Visit
              </th>
            </tr>
          </thead>
          {!isLoading &&
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
                    <Link to={`/dashboard/college/${college._id}`}>
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
