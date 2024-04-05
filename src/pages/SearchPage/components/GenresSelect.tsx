import React, { SetStateAction, useContext, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { animeAPI } from '../../../services/animeService'
import { SearchPageContext } from '../SearchPageContext'
import { mangaAPI } from '../../../services/mangaService'

const GenresSelect = () => {
    const searchPageContext = useContext(SearchPageContext)!;

    useEffect(() => {
        searchPageContext.statesSetters.setChoosenGenresIds([]);
    }, [])

    if (searchPageContext.states.mode === 'anime') {

        const { data: genres, error, isLoading } = animeAPI.useFetchAnimeGenresQuery(null);

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
            searchPageContext.statesSetters.setChoosenGenresIds([...searchPageContext.states.choosenGenresIds, { name: values[1], id: +values[0] }]);
        }

        return (
            <Form.Select onChange={(e) => addGenreToList(e)} >
                <option disabled >Genres</option>
                {genres && genres.data.map(genre => {
                    return <option value={genre.mal_id + '/' + genre.name} key={genre.mal_id} >{genre.name}</option>
                })}
            </Form.Select>
        )

    }

    if (searchPageContext.states.mode === 'manga') {
        const { data: genres, error, isLoading } = mangaAPI.useFetchMangaGenresQuery(null);

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
            searchPageContext.statesSetters.setChoosenGenresIds([...searchPageContext.states.choosenGenresIds, { name: values[1], id: +values[0] }]);
        }

        return (
            <Form.Select onChange={(e) => addGenreToList(e)} >
                <option disabled >Genres</option>
                {genres && genres.data.map(genre => {
                    return <option value={genre.mal_id + '/' + genre.name} key={genre.mal_id} >{genre.name}</option>
                })}
            </Form.Select>
        )
    }

}

export default GenresSelect