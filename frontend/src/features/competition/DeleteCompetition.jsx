import React from "react";
import { useDeleteCompetitionMutation } from "./competitionSilce";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteCompetition(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [deleteCompetition] = useDeleteCompetitionMutation();
  return (
    <div className="flex justify-center">
      <div className="text-center">
        <p>Are you want to delete ??</p>

        <div className="">
          <button className=" button mr-1 mt-2" onClick={() => navigate("/")}>
            No
          </button>
          <button
            className=" button bg-red-500 hover:bg-red-400 ml-1 mt-2"
            onClick={() => {
              deleteCompetition(id);
              navigate(-1);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
