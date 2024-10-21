import { baseApi } from "./baseApi";

const oppressedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOppressed: builder.mutation({
      query: (data) => ({
        url: "/oppressed",
        method: "POST",
        data,
      }),
      invalidatesTags: ["oppressed"],
    }),

    deleteOppressed: builder.mutation({
      query: (id) => ({
        url: `/oppressed/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["oppressed"],
    }),
    getAllOppressed: builder.query({
      query: ({ page = 1, limit = 5 }) => ({
        url: `/oppressed`,
        method: "GET",
        params: { page, limit },
      }),
      providesTags: ["oppressed"],
    }),
    
    getSingleOppressed: builder.query({
      query: (id) => ({
        url: `/oppressed/${id}`,
        method: "GET",
      }),
      providesTags: ["oppressed"],
    }),
    updateOppressed: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/oppressed/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["oppressed"],
    }),
  }),
});

export const {
  useGetAllOppressedQuery,
  useCreateOppressedMutation,
  useDeleteOppressedMutation,
  useUpdateOppressedMutation,
  useGetSingleOppressedQuery,
} = oppressedApi;
