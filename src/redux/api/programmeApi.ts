import { baseApi } from "./baseApi";

const programmeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProgramme: builder.query({
      query: () => ({
        url: `/programm`,
        method: "GET",
      }),
      providesTags: ["programm"],
    }),

    getSingleProgramme: builder.query({
      query: (id) => ({
        url: `/programm/${id}`,
        method: "GET",
      }),
      providesTags: ["programm"],
    }),
  }),
});

export const { useGetAllProgrammeQuery, useGetSingleProgrammeQuery } =
  programmeApi;
