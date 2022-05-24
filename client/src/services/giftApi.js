import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { getCurrentUserToken } from "../firebase/firebase";

// Define a service using a base URL and expected endpoints
export const giftApi = createApi({
  reducerPath: "giftApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    // prepareHeaders: async (headers, { getState }) => {
    //   const userToken = await getCurrentUserToken();
    //   // If we have a token set in state, let's assume that we should be passing it.
    //   if (userToken) {
    //     headers.set("authorization", `Bearer ${userToken}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getGifts: builder.query({
      query: () => `/gifts`,
    }),
    getGift: builder.query({
      query: (id) => `/gift/${id}`,
    }),
    createGift: builder.mutation({
      query: (body) => ({
        url: `/gifts`,
        method: "POST",
        body,
      }),
    }),
    updateGift: builder.mutation({
      query: ({id,...patch}) => ({
        url: `/gift/${id}`,
        method: "PATCH",
        body: patch,
      }),
    }),
    deleteGift: builder.mutation({
      query: (id) => ({
        url: `/gift/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetGiftsQuery,
  useGetGiftQuery,
  useCreateGiftMutation,
  useDeleteGiftMutation,
  useUpdateGiftMutation,
} = giftApi;
