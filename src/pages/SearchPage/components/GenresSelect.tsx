import React, { useContext, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { SearchPageContext } from '../SearchPageContext'
import { getGenresWithMode } from '../withModeFunction'

const GenresSelect = () => {
    const {states, statesSetters} = useContext(SearchPageContext)!;

    useEffect(() => {
        statesSetters.setChoosenGenresIds([]);
    }, [])

    const {data, error, isLoading} = getGenresWithMode(states.mode)(null);


    if (error) {
        return <div>While fetching genres error occured! Try later.</div>
    }

    if (isLoading) {
        return (
            <Form.Select disabled aria-label="Default select example">
                <option>Loading</option>
            </Form.Select>
        )
    }

    const addGenreToList = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const values = e.target.value.split('/');
        statesSetters.setChoosenGenresIds([...states.choosenGenresIds, { name: values[1], id: +values[0] }]);
    }

    return (
        <Form.Select onChange={(e) => addGenreToList(e)} >
            <option disabled >Genres</option>
            {data && data.data.map(genre => {
                return <option value={genre.mal_id + '/' + genre.name} key={genre.mal_id} >{genre.name}</option>
            })}
        </Form.Select>
    )   
}

export default GenresSelect