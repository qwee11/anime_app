import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Manga, mangaCharactersResponse, mangaResponse, mangaStatisticsResponse, searchedTitlesArgs, titleGenres, topMangaArgs } from "./models";

export const mangaAPI = createApi({
    reducerPath: 'mangaAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4' }),
    endpoints: (build) => ({
        getTopManga: build.query<mangaResponse, topMangaArgs>({
            query: (args: topMangaArgs) => ({
                url: '/top/manga',
                params: {
                    page: args.page,
                    filter: args.filter
                }
            })
        }),
        getMangaFull: build.query<{ data: Manga }, string>({
            query: (id: string) => ({
                url: `/manga/${id}/full`
            })
        }),
        getMangaStatistics: build.query<{ data: mangaStatisticsResponse }, string>({
            query: (id: string) => ({
                url: `manga/${id}/statistics`,
            })
        }),
        getMangaGenres: build.query<{ data: titleGenres[] }, null>({
            query: () => ({
                url: `genres/manga`
            })
        }),
        getMangaCharacters: build.query<{data: mangaCharactersResponse[]}, string>({
            query: (id: string) => ({
                url: `manga/${id}/characters`
            })
        }),
        getSearchedManga: build.query<mangaResponse, searchedTitlesArgs>({
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