import { TagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createContact: build.mutation({
      query: (data) => ({
        url: "/create-contact",
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: [TagTypes.CONTACT],
    }),

    //Get All Contacts
    getAllContacts: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/",
        method: "GET",
        params: arg,
      }),

      providesTags: [TagTypes.CONTACT],
    }),

    //Get Single Contact
    getSingleContact: build.query({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.CONTACT],
    }),

    //Delete Contact
    deleteContact: build.mutation({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.CONTACT],
    }),

    //update Contact
    updateContact: build.mutation({
      query: ({ id, ...data }) => ({
        url: `/update-contact/${id}`,
        method: "PATCH",
        data,
        contentType: "application/json",
      }),
      invalidatesTags: [TagTypes.CONTACT],
    }),
  }),
});

export const {
  useCreateContactMutation,
  useGetAllContactsQuery,
  useGetSingleContactQuery,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactApi;
