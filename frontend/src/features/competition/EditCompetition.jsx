import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
  useRegisterMutation,
  useProfileQuery,
} from "../../features/users/usersSlice.js";
import { setCredentials } from "../../features/authSlice.js";

import {
  useCreateCompetitionMutation,
  useGetCompetitionQuery,
  useUpdateCompetitionMutation,
} from "../competition/competitionSilce.js";

export default function EditCompetition() {
  const { id } = useParams();
  const {
    data: getCompetition,
    isSuccess: getCompetitionIsSuccess,
    isLoading: getCompetitionLoding,
  } = useGetCompetitionQuery(id);
  const [updateCompetition, { isLoading }] = useUpdateCompetitionMutation();
  // const { userProfileData, isLoading: profileDataLoding } = useProfileQuery();
  const { userInfo } = useSelector((state) => state.auth);
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  const onSubmitHandler = async (data) => {
    try {
      data = { ...data, _id: id };
      const res = await updateCompetition(data).unwrap();
      // dispatch(setCredentials({ ...res }));
      // console.log(userProfileData);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      setValue("name", getCompetition.name);
      setValue("description", getCompetition.description);
      setValue("startdate", getCompetition.startdate);
      setValue("enddate", getCompetition.enddate);
    } catch (error) {}
  }, [navigate]);

  return (
    <section className="mt-7">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full md:mt-0 relative z-10 shadow-md "
      >
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font border-b pb-2 text-center">
          Edit Section
        </h2>
        <div className="relative mb-4 mt-5">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            {...register("name", { required: true })}
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="description"
            className="leading-7 text-sm text-gray-600"
          >
            description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            {...register("description", { required: true })}
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="startdate"
            className="leading-7 text-sm text-gray-600"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startdate"
            name="startdate"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            {...register("startdate", { required: true })}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="enddate" className="leading-7 text-sm text-gray-600">
            End Date
          </label>
          <input
            type="date"
            id="enddate"
            name="enddate"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            {...register("enddate", { required: true })}
          />
        </div>

        <button className="button">Edit</button>
      </form>
    </section>
  );
}
