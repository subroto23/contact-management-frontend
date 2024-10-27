import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesValues } from "../tagTypes";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_API}`,
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesValues,
});
