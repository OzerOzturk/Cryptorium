import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';


const createRequest = (url) => ({url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptos:builder.query({
            query:() => createRequest('/coins')
        })
    })
});

export const { useGetCryptosQuery} = cryptoApi;