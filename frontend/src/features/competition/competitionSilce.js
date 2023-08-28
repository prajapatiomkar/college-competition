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
    getCompetition: builder.query({
      query: (id) => ({
        url: `/admin/competition/${id}`,
        method: "GET",
      }),
      providesTags: ["Competition"],
    }),
    updateCompetition: builder.mutation({
      query: (data) => ({
        url: "/admin/update-competition",
        method: "POST",
        body: {
          ...data,
        },
      }),
      invalidatesTags: ["Competition"],
    }),
    deleteCompetition: builder.mutation({
      query: (id) => ({
        url: `/admin/delete-competition/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Competition"],
    }),
  }),
});

export const {
  useCreateCompetitionMutation,
  useGetCompetitionsQuery,
  useGetCompetitionQuery,
  useUpdateCompetitionMutation,
  useDeleteCompetitionMutation,
} = competitionAPI;
