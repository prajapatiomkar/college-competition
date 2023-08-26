import React from "react";

import { useGetCollegeQuery } from "./collegeSlice.js";
import { Link, useParams } from "react-router-dom";
import CreateCompetition from "../competition/createCompetition.jsx";

import { useForm } from "react-hook-form";

export default function College() {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const { data: college, isSuccess } = useGetCollegeQuery(id);
  // console.log(data);
  const onSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <>
      {isSuccess && (
        <>
          <div className="flex justify-between">
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
            <button
              type="button"
              className="button"
              data-hs-overlay="#hs-focus-management-modal"
            >
              Add Competition
            </button>
            <div
              id="hs-focus-management-modal"
              className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto "
            >
              <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto ">
                <div className="flex flex-col bg-white  shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <section className="mt-7">
                    <form
                      onSubmit={handleSubmit(onSubmitHandler)}
                      className=" bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full md:mt-0 relative z-10  "
                    >
                      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font  pb-2 text-center border-b">
                        Add Competition
                      </h2>
                      <div className="relative mb-4 mt-5 ">
                        <label
                          htmlFor="name"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          autoFocus
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          {...register("name", { required: true })}
                        />
                      </div>
                      <div className="relative mb-4  ">
                        <label
                          htmlFor="description"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Description
                        </label>
                        <input
                          type="text"
                          id="description"
                          name="description"
                          autoFocus
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
                          autoFocus
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          {...register("startdate", { required: true })}
                        />
                      </div>
                      <div className="relative mb-4">
                        <label
                          htmlFor="enddate"
                          className="leading-7 text-sm text-gray-600"
                        >
                          End Date
                        </label>
                        <input
                          type="date"
                          id="enddate"
                          name="enddate"
                          autoFocus
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          {...register("enddate", { required: true })}
                        />
                      </div>
                      <button
                        className="button bg-white border text-black hover:bg-gray-100"
                        data-hs-overlay="#hs-focus-management-modal"
                      >
                        Close
                      </button>
                      <button className="button">Create</button>
                    </form>
                  </section>
                  <div className="flex justify-end items-center gap-x-2 py-3 px-4  dark:border-gray-700"></div>
                </div>
              </div>
            </div>
          </div>
          <table className="table-auto mt-4 w-full text-left whitespace-no-wrap">
            <thead>
              <tr className="">
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Competition
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Start
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  End
                </th>
              </tr>
            </thead>
          </table>
        </>
      )}
    </>
  );
}
