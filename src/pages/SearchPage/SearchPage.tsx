import React, { useEffect, useMemo, useState } from 'react'
import { SearchPageContext } from './SearchPageContext';
import './style.scss'
import Header from './components/Header';
import { animeAPI } from '../../services/animeService';
import DisplayFound from './components/DisplayFound';
import { Spinner } from 'react-bootstrap';
import { redirect, useNavigate } from 'react-router-dom';
import { mangaAPI } from '../../services/mangaService';

type useLazyAnimeSearchType = ReturnType<typeof animeAPI.useLazyFetchSearchedAnimeQuery>
type useLazyMangaSearchType = ReturnType<typeof mangaAPI.useLazyFetchSearchedMangaQuery>

type useLazyTitleSearchType = useLazyAnimeSearchType | useLazyMangaSearchType;

type props = {
    mode: 'anime' | 'manga',
    lazySearchFunction: () => useLazyTitleSearchType,
}

const SearchPage: React.FC<props> = ({mode, lazySearchFunction}) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [queryInput, setQueryInput] = useState('');

    const [choosenGenresIds, setChoosenGenresIds] = useState<{ name: string, id: number }[]>([]);
    const [choosenYear, setChoosenYear] = useState<number | null>(null);
    const [choosenOrder, setChoosenOrder] = useState<string | null>(null);

    const [trigger, { data: titleData, isError: titleError, isLoading: titleIsLoading }] = lazySearchFunction();

    const triggerArgs = {
        genres: choosenGenresIds.length === 0 ? null : choosenGenresIds.map(genre => genre.id),
        order_by: choosenOrder,
        page: currentPage,
        q: queryInput.length === 0 ? null : queryInput,
        start_date: !choosenYear ? null : choosenYear + '-01-01'
    }

    useEffect(() => {
        trigger(triggerArgs)
    }, [currentPage])

    const fetchData = () => {
        trigger(triggerArgs);
    }

    return (
        <SearchPageContext.Provider value={{
            states: {
                currentPage,
                choosenGenresIds,
                choosenYear,
                choosenOrder,
                queryInput,
                mode
            },
            statesSetters: {
                setCurrentPage,
                setChoosenGenresIds,
                setChoosenYear,
                setChoosenOrder,
                setQueryInput,
            },
            utils: {
                last_visible_page: titleData && titleData.pagination.last_visible_page || 0,
                fetchData,
                data: titleData ? titleData : null,
            }
        }} >
            <div className='search-page' >
                <Header />
                {titleIsLoading ? <div className='search-page__loader' ><Spinner  variant='primary' animation='border' /></div>
                    : titleData && <DisplayFound isError={titleError} titleList={titleData.data} />
                }
            </div>
        </SearchPageContext.Provider>
    )
}

export default SearchPage