import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
  useRegisterMutation,
  useUpdateMutation,
  useProfileQuery,
} from "../../features/users/usersSlice.js";
import { setCredentials } from "../../features/authSlice.js";

export default function UserProfile() {
  const { id } = useParams();
  const {
    data: userProfile,
    isSuccess: userProfileIsSuccess,
    isLoading: userProfileIsLoading,
  } = useProfileQuery(id);
  const [userRegister, { isLoading }] = useRegisterMutation();
  // const { userProfileData, isLoading: profileDataLoding } = useProfileQuery();
  const [userUpdate] = useUpdateMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = async (data) => {
    try {
      const res = await userUpdate(data).unwrap();
      // dispatch(setCredentials({ ...res }));
      // console.log(userProfileData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userProfileIsSuccess) {
      setValue("name", userProfile.name);
      setValue("email", userProfile.email);
      setValue("role", userProfile.role);
    }
  }, []);

  return (
    <section className="mt-7">
      {!userProfileIsLoading && (
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full md:mt-0 relative z-10 shadow-md "
        >
          {/* ----------------------------------- */}

          {/* ----------------------------------- */}

          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font border-b pb-2 text-center">
            Profile
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
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              {...register("email", { required: true })}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="role" className="leading-7 text-sm text-gray-600">
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              disabled="true"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              {...register("role", { required: true })}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="currentpassword"
              className="leading-7 text-sm text-gray-600"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentpassword"
              name="currentpassword"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              {...register("currentpassword", { required: true })}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="newpassword"
              className="leading-7 text-sm text-gray-600"
            >
              New Password
            </label>
            <input
              type="password"
              id="newpassword"
              name="newpassword"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              {...register("newpassword", { required: true })}
            />
          </div>

          <button className="button">Update</button>
        </form>
      )}
    </section>
  );
}
