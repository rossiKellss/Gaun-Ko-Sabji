import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../features/auth/authSlice";
const baseQuery=fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
    credentials:'include',
    prepareHeaders:(headers,{getState})=>{
      const token=getState().auth.token;
      if(token){
        headers.set("Authorization",`Bearer ${token}`)
      }
      return headers
    }

    
  })

baseQueryWithReauth:async(ars,api,extraOptions)=>{
  const result=await fetchBaseQuery(args,api,extraOptions);
  if(result?.error?.originalStatus==401){
    const refreshResult=fetchBaseQuery('/auth/')
  }

}


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery:baseQuery,
  
  endpoints: () => ({}),
});
