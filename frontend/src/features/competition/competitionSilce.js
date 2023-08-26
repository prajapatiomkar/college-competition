import { apiSlice } from "../api/apiSlice";

const competitionAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCompetition: builder.mutation({
      query: (data) => ({
        url: "/admin/competition",
        method: "POST",
        body: {
          ...data,
        },
      }),
      invalidatesTags: ["Competition"],
    }),
    getCompetitions: builder.query({
      query: () => ({
        url: "/admin/competitions",
        method: "GET",
      }),
      providesTags: ["Competition"],
    }),
  }),
});

export const { useCreateCompetitionMutation, useGetCompetitionsQuery } =
  competitionAPI;
