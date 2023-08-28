import React from "react";
import { useGetCollegeQuery } from "./collegeSlice.js";
import { useGetCompetitionsQuery } from "../competition/competitionSilce.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

import { AiOutlineEdit } from "react-icons/ai";

import AddCompetition from "../competition/AddCompetition.jsx";
import EditCompetition from "../competition/EditCompetition.jsx";
import DeleteCompetition from "../competition/DeleteCompetition.jsx";

export default function College() {
  // const navigate = useNavigate();
  const { data: getCompetitions, isSuccess: competitionsIsSuccess } =
    useGetCompetitionsQuery();
  const { id } = useParams();
  const { data: college, isSuccess } = useGetCollegeQuery(id);
  // console.log(data);

  return (
    <>
      {isSuccess && (
        <>
          <div className="flex items-center justify-between border-b pb-2">
            <div className="">
              <p>
                <span className="font-medium">College: </span>
                {college.name}
              </p>
              <p>
                <span className="font-medium">Location: </span>
                {college.location}
              </p>
            </div>
            <AddCompetition />
          </div>

          {competitionsIsSuccess && getCompetitions.length === 0 ? (
            <div className=" w-full text-center mt-40 text-2xl">
              Competitions List Empty
            </div>
          ) : (
            <table className="table-style">
              <thead>
                <tr className="">
                  <th className="table-style-head rounded-tl rounded-bl">
                    Competition
                  </th>
                  <th className="table-style-head">Start</th>
                  <th className="table-style-head">End</th>
                  <th className="table-style-head">Edit</th>
                  <th className="table-style-head">Delete</th>
                </tr>
              </thead>
              <tbody>
                {competitionsIsSuccess &&
                  getCompetitions.map((competition) => (
                    <>
                      <tr className="border px-6 py-3">
                        <td className="px-4 py-3">
                          <p>{competition.name}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p>{competition.startdate}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p>{competition.enddate}</p>
                        </td>
                        <td className="px-4 py-3">
                          <Link to={`/college/edit/${competition._id}`}>
                            <AiOutlineEdit />
                          </Link>
                        </td>
                        <td className="px-4 py-3">
                          <Link
                            to={`/admin/delete-competition/${competition._id}`}
                          >
                            <AiOutlineDelete />
                          </Link>
                        </td>
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </>
  );
}
