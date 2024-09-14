import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const authApi=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'http://'})
})