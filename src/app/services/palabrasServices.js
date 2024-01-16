import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firebase/db'

export const palabrasApi = createApi({
    reducerPath: "palabrasApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        getPalabras: builder.query({
            query: () => `palabras.json`,
            transformResponse: (response) => Object.values(response)
        }),
        getNumeros: builder.query({
            query: () => `numeros.json`
        }),
        postPalabras: builder.mutation({
            query: (palabra) => ({
                url: "palabras.json",
                method: "POST",
                body: palabra
            })
        }),
    })
})

export const { useGetPalabrasQuery, useGetNumerosQuery, usePostPalabrasMutation } = palabrasApi