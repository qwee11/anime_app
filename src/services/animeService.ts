import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Anime, animeCharactersResponse, titleGenres, animeResponse, animeStatisticsResponse, searchedTitlesArgs, topAnimeArgs } from "./models";

export const animeAPI = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4' }),
    endpoints: (build) => ({
        getTopAnime: build.query<animeResponse, topAnimeArgs>({
            query: (args: topAnimeArgs) => ({
                url: '/top/anime',
                params: {
                    page: args.page,
                    filter: args.filter
                }
            })
        }),
        getAnimeFull: build.query<{ data: Anime }, string>({
            query: (id: string) => ({
                url: `/anime/${id}/full`
            })
        }),
        getAnimeStatistics: build.query<{ data: animeStatisticsResponse }, string>({
            query: (id: string) => ({
                url: `anime/${id}/statistics`,
            })
        }),
        getAnimeGenres: build.query<{ data: titleGenres[] }, null>({
            query: () => ({
                url: `genres/anime`
            })
        }),
        getAnimeCharacters: build.query<{data: animeCharactersResponse[]}, string>({
            query: (id: string) => ({
                url: `anime/${id}/characters`
            })
        }),
        getSearchedAnime: build.query<animeResponse, searchedTitlesArgs>({
            query: (args: searchedTitlesArgs) => {
                const params = Object.fromEntries(
                    Object.entries(args).filter(([k, v]) => v !== null)
                )

                return {
                    url: '/anime',
                    params
                }
            }
        })
    })
})