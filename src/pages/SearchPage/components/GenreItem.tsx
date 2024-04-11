import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { SearchPageContext } from '../SearchPageContext'

type props = {
    genreName: string,
    mal_id: number
}

const GenreItem: React.FC<props> = ({ genreName, mal_id }) => {
    const {states, statesSetters} = useContext(SearchPageContext)!;

    const deleteGenreFromList = () => {
        statesSetters.setChoosenGenresIds(
            states.choosenGenresIds.filter(genre => genre.id !== mal_id)
        )
    }
 
    return (
        <div className='search-page__header__secondary__choosed-genres__item' >
            {genreName} <Button variant='outline-danger' onClick={() => deleteGenreFromList()} >Cancel</Button>
        </div>
    )
}

export default GenreItem