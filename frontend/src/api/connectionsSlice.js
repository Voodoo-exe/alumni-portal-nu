import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { createApi } from "@reduxjs/toolkit/query/react"

export const connectionsSlice = createApi({
  reducerPath: "api/v1/",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
  credentials: "include",

  endpoints: (builder) => ({
    getOthers: builder.query({
      query: () => "/users/alumnus/others",
    }),
  }),
})

export const { useGetOthersQuery } = connectionsSlice
