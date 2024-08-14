import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const vegetableApi=createApi({
    reducerPath:"vegetableApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000"}),
    tagTypes:["vegetable"],
    endpoints:(builder)=>({
        getVegetables:builder.query({
            query:()=>("vegetables"),
            providesTags:["vegetable"]
        }),
        addVegetables:builder.query({
            query:(data)=>({
                url:"vegetables",
                method:"POST",
                body:data


            }),
            invalidatesTags:["vegetable"]
        }),
        deleteVegetables:builder.query({
            query:()=>({
                url:`vegetables/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["vegetable"]

        })


    })

})

export const {useGetVegetablesQuery,useDeleteVegetablesQuery,useAddVegetablesQuery}=vegetableApi