import { apiSlice } from './apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/auth/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/auth/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
    confirmUser:builder.mutation({
        query:(code)=>({
            url:'/auth/confirm-user',
            method:'POST',
            body:code

        })

    }),
    validateOtp:builder.mutation({
      query:(code)=>({
        url:'/auth/validate-otp',
        method:'POST',
        body:code
      })
    }),
    resetPassword: builder.mutation({
      query: (resetData) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: resetData,
      }),
    }),
  }),
});

export const { 
  useRegisterUserMutation, 
  useConfirmUserMutation,
  useLoginUserMutation, 
  useResetPasswordMutation,
  useValidateOtpMutation
} = authApiSlice;
