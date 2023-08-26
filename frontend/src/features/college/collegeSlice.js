import { apiSlice } from "../api/apiSlice.js";

export const collegeAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCollege: builder.mutation({
      query: (data) => ({
        url: "/admin/college",
        method: "POST",
        body: {
          ...data,
        },
      }),
      invalidatesTags: ["College"],
    }),
    getColleges: builder.query({
      query: () => ({
        url: "/admin/colleges",
        method: "GET",
      }),
      providesTags: ["College"],
    }),
    getCollege: builder.query({
      query: (id) => ({
        url: `/admin/college/${id}`,
        method: "GET",
      }),
      providesTags: ["College"],
    }),
  }),
});

export const {
  useCreateCollegeMutation,
  useGetCollegesQuery,
  useGetCollegeQuery,
} = collegeAPI;
