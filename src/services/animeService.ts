import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Anime, animeCharactersResponse, titleGenres, animeResponse, animeStatisticsResponse, searchedTitlesArgs, topAnimeArgs } from "./models";

export const animeAPI = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4' }),
    endpoints: (build) => ({
        fetchTopAnime: build.query<animeResponse, topAnimeArgs>({
            query: (args: topAnimeArgs) => ({
                url: '/top/anime',
                params: {
                    page: args.page,
                    filter: args.filter
                }
            })
        }),
        fetchAnimeFull: build.query<{ data: Anime }, string>({
            query: (id: string) => ({
                url: `/anime/${id}/full`
            })
        }),
        fetchAnimeStatistics: build.query<{ data: animeStatisticsResponse }, string>({
            query: (id: string) => ({
                url: `anime/${id}/statistics`,
            })
        }),
        fetchAnimeGenres: build.query<{ data: titleGenres[] }, null>({
            query: () => ({
                url: `genres/anime`
            })
        }),
        fetchAnimeCharacters: build.query<{data: animeCharactersResponse[]}, string>({
            query: (id: string) => ({
                url: `anime/${id}/characters`
            })
        }),
        fetchSearchedAnime: build.query<animeResponse, searchedTitlesArgs>({
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