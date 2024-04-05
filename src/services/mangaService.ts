import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Manga, mangaCharactersResponse, mangaResponse, mangaStatisticsResponse, searchedTitlesArgs, titleGenres, topMangaArgs } from "./models";

export const mangaAPI = createApi({
    reducerPath: 'mangaAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4' }),
    endpoints: (build) => ({
        fetchTopManga: build.query<mangaResponse, topMangaArgs>({
            query: (args: topMangaArgs) => ({
                url: '/top/manga',
                params: {
                    page: args.page,
                    filter: args.filter
                }
            })
        }),
        fetchMangaFull: build.query<{ data: Manga }, string>({
            query: (id: string) => ({
                url: `/manga/${id}/full`
            })
        }),
        fetchMangaStatistics: build.query<{ data: mangaStatisticsResponse }, string>({
            query: (id: string) => ({
                url: `manga/${id}/statistics`,
            })
        }),
        fetchMangaGenres: build.query<{ data: titleGenres[] }, null>({
            query: () => ({
                url: `genres/manga`
            })
        }),
        fetchMangaCharacters: build.query<{data: mangaCharactersResponse[]}, string>({
            query: (id: string) => ({
                url: `manga/${id}/characters`
            })
        }),
        fetchSearchedManga: build.query<mangaResponse, searchedTitlesArgs>({
            query: (args: searchedTitlesArgs) => {
                const params = Object.fromEntries(
                    Object.entries(args).filter(([k, v]) => v !== null)
                )

                return {
                    url: '/manga',
                    params
                }
            }
        })
    })
})