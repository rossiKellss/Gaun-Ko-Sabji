import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus == 401) {
    const refreshResult = await baseQuery(
      "/auth/refresh-token",
      api,
      extraOptions
    );
    if (refreshResult?.data) {
      const user = api.getState().auth.user;

      api.dispatch(
        setCredentials({ ...user, token: refreshResult.data.token })
      );
      result = await fetchBaseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery:baseQueryWithReauth,

  endpoints: () => ({}),
});
