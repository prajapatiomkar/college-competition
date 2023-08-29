import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

export const userAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: {
          ...data,
        },
      }),
    }),

    register: builder.mutation({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        body: {
          ...data,
        },
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/user/logout",
        method: "DELETE",
      }),
    }),
    profile: builder.query({
      query: (id) => ({
        url: `/user/profile/${id}`,
        method: "GET",
      }),
    }),
    update: builder.mutation({
      query: (data) => ({
        url: "/user/profile",
        method: "PUT",
        body: {
          ...data,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useProfileQuery,
  useUpdateMutation,
} = userAPI;
