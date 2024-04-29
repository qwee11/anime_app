import React, { useEffect, useState } from 'react'

import { Spinner } from 'react-bootstrap';
import Heading from './components/Heading';
import DisplayFound from './components/DisplayFound';

import { SearchPageContext } from './SearchPageContext';
import { lazyGetSearchedTitlesWithMode } from './withModeFunction';

import './style.scss'

type props = {
    mode: 'anime' | 'manga',
}

const SearchPage: React.FC<props> = ({mode}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [queryInput, setQueryInput] = useState('');

    const [choosenGenresIds, setChoosenGenresIds] = useState<{ name: string, id: number }[]>([]);
    const [choosenYear, setChoosenYear] = useState<number | null>(null);
    const [choosenOrder, setChoosenOrder] = useState<string | null>(null);

    const [trigger, { data: titlesData, isError: titlesError, isLoading: titlesIsLoading }] = lazyGetSearchedTitlesWithMode(mode)();

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

    if(titlesError) {
        return (
            <h1>
                Error occured! Try again later.
            </h1>
        )
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
                last_visible_page: titlesData && titlesData.pagination.last_visible_page || 0,
                fetchData,
                titlesData: titlesData ? titlesData : null,
            }
        }} >

            <div className='search-page' >
                <Heading />
                {titlesIsLoading ? <div className='search-page__loader' ><Spinner  variant='primary' animation='border' /></div>
                    : titlesData && <DisplayFound isError={titlesError} titleList={titlesData.data} />
                }
            </div>

        </SearchPageContext.Provider>
    );
};

export default SearchPage;