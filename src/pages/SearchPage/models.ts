import { animeAPI } from "../../services/animeService"
import { mangaAPI } from "../../services/mangaService"
import { animeResponse } from "../../services/models"

export type searchPageContext = {
    states: {
        currentPage: number,
        choosenGenresIds: {name: string, id: number}[],
        choosenYear: null | number,
        choosenOrder: string | null,
        queryInput: string,
        mode: "anime" | 'manga'
    },
    statesSetters: {
        setCurrentPage: React.Dispatch<React.SetStateAction<number>>
        setChoosenGenresIds: React.Dispatch<React.SetStateAction<{name: string, id: number}[]>>
        setChoosenYear: React.Dispatch<React.SetStateAction<null | number>>
        setChoosenOrder: React.Dispatch<React.SetStateAction<string | null>>
        setQueryInput: React.Dispatch<React.SetStateAction<string>>,
    },
    utils: {
        fetchData: () => void,
        last_visible_page: number,
        titlesData: animeResponse | null,
    }
}

type useLazyAnimeSearchType = ReturnType<typeof animeAPI.useLazyGetSearchedAnimeQuery>
type useLazyMangaSearchType = ReturnType<typeof mangaAPI.useLazyGetSearchedMangaQuery>

export type useLazyTitleSearchType = useLazyAnimeSearchType | useLazyMangaSearchType;