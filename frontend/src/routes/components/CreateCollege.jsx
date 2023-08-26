import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useLoginMutation } from "../../features/users/usersSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useCreateCollegeMutation } from "../../features/college/collegeSlice.js";

export default function CreateCollege() {
  const [createCollege, { isLoading }] = useCreateCollegeMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (data) => {
    try {
      console.log(data);
      const res = await createCollege(data).unwrap();
      // dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mt-7">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full md:mt-0 relative z-10 shadow-md "
      >
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font border-b pb-2 text-center">
          Create College
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
          <label htmlFor="location" className="leading-7 text-sm text-gray-600">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            {...register("location", { required: true })}
          />
        </div>

        <button className="button">Create</button>
      </form>
    </section>
  );
}
