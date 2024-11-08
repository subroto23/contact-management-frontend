import { TagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const contactReactionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createContactReaction: build.mutation({
      query: (data) => ({
        url: "/reaction/create-contact-reaction",
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: [TagTypes.REACTION],
    }),

    //Get All Contacts Reactions
    getAllContactsReaction: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/reaction",
        method: "GET",
        params: arg,
      }),

      providesTags: [TagTypes.REACTION],
    }),

    //Get Single Contact Reaction
    getSingleContactReaction: build.query({
      query: ({ id }) => ({
        url: `/reaction/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.REACTION],
    }),

    //update Contact
    updateContactReaction: build.mutation({
      query: ({ id, ...data }) => ({
        url: `/reaction/update-contact-reaction/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: [TagTypes.REACTION],
    }),
  }),
});

export const {
  useCreateContactReactionMutation,
  useGetAllContactsReactionQuery,
  useGetSingleContactReactionQuery,
  useUpdateContactReactionMutation,
} = contactReactionApi;
