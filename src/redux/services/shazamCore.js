import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as dotenv from 'dotenv';

dotenv.config();

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', process.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongsDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    getSongsRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsDetailsQuery,
  useGetSongsRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
} = shazamCoreApi;
