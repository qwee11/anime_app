import { animeAPI } from "../../services/animeService"
import { mangaAPI } from "../../services/mangaService"

export const getTopTitlesWithMode = (mode: 'anime' | 'manga') => {
    if(mode === 'anime') {
        return animeAPI.useGetTopAnimeQuery;
    }

    return mangaAPI.useGetTopMangaQuery;
}