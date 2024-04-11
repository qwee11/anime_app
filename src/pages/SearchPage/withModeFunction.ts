import { animeAPI } from "../../services/animeService"
import { mangaAPI } from "../../services/mangaService"

export const lazyGetSearchedTitlesWithMode = (mode: 'anime' | 'manga') => {
    if(mode === 'anime') {
        return animeAPI.useLazyGetSearchedAnimeQuery
    }
    return mangaAPI.useLazyGetSearchedMangaQuery
}

export const getGenresWithMode = (mode: 'anime' | 'manga') => {
    if(mode === 'anime') {
        return animeAPI.useGetAnimeGenresQuery
    }
    return mangaAPI.useGetMangaGenresQuery
}