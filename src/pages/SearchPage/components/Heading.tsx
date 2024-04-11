import React, { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import GenresSelect from './GenresSelect'
import { SearchPageContext } from '../SearchPageContext';
import GenreItem from './GenreItem';
import SelectYears from './SelectYears';
import SelectOrder from './SelectOrder';
import DisplayPagination from './DisplayPagination';
import { Link } from 'react-router-dom';


const Heading = () => {
    const { states, statesSetters, utils } = useContext(SearchPageContext)!;

    return (
        <div className='search-page__header' >
            <div className="search-page__header__main">
                <Link reloadDocument to={'/search/anime'}
                    className={`${states.mode === 'anime' ? "choosed-mode" : 'mode'}`}
                >
                    <div className='c-pointer' >
                    Anime
                    </div>
                </Link>
                <Link reloadDocument to={'/search/manga'}
                    className={`${states.mode === 'manga' ? "choosed-mode" : 'mode'}`}
                >
                    <div className='c-pointer' >
                    Manga
                    </div>
                </Link>
                <Form.Control
                    value={states.queryInput}
                    onChange={e => statesSetters.setQueryInput(e.target.value)}
                    placeholder='Search...'
                />
                <Button onClick={utils.fetchData} variant='outline-primary' >Search</Button>
            </div>
            <div className="search-page__header__secondary">
                <div className="search-pahe__header__secondary__genres">
                    <GenresSelect />
                </div>
                <div className="search-page__header__secondary__choosed-genres">
                    {states.choosenGenresIds.map(e => {
                        return <GenreItem genreName={e.name} key={e.id} mal_id={e.id} />
                    })}
                </div>
                <div className="search-page__header__secondary__choose-year">
                    <SelectYears />
                </div>
                <div className="search-page__header__secondary__choose-order">
                    <SelectOrder />
                </div>
                <div className="search-page__header__secondary__pagination">
                    <DisplayPagination />
                </div>
            </div>
        </div>
    )
}

export default Heading