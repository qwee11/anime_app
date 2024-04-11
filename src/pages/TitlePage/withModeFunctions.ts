import { animeAPI } from "../../services/animeService";
import { mangaAPI } from "../../services/mangaService";

export const getTitleFullWithMode = (mode: 'anime' | 'manga') => {
    if(mode === 'anime') {
        return animeAPI.useGetAnimeFullQuery
    }

    return mangaAPI.useGetMangaFullQuery;
}

export const getTitleStatisticsWithMode = (mode: 'anime' | 'manga') => {
    if(mode === 'anime') {
        return animeAPI.useGetAnimeStatisticsQuery
    }

    return mangaAPI.useGetMangaStatisticsQuery
}

export const getCharactersWithMode = (mode: 'anime' | 'manga') => {
    if(mode === 'anime') {
        return animeAPI.useGetAnimeCharactersQuery
    }

    return mangaAPI.useGetMangaCharactersQuery
}