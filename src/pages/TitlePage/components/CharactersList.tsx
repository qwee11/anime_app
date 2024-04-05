import React from 'react'
import { animeAPI } from '../../../services/animeService'
import { Spinner } from 'react-bootstrap'
import CharacterCard from './CharacterCard/CharacterCard'
import { mangaAPI } from '../../../services/mangaService'

type props = {
    mode: 'anime' | 'manga',
    id: string
}

const CharactersList: React.FC<props> = ({ id, mode }) => {

    if (mode === 'anime') {
        const { data, error, isLoading } = animeAPI.useFetchAnimeCharactersQuery(id);

        if (isLoading) {
            return (
                <div className="title-page__info__characters-list bg-secondary-subtle">
                    <Spinner variant='primary' />
                </div>
            )
        }

        if(error) {
            return (
                <div className="title-page__info__characters-list bg-secondary-subtle">
                    <h1>Error occured</h1>
            </div>
            )
        }

        if (data) {
            return (
                <div className="title-page__info__characters-list bg-secondary-subtle">
                    {data.data.map(character => <CharacterCard
                        character={character.character}
                        voiceActors={character.voice_actors}
                        key={character.character.mal_id}
                        role={null}
                    />)}
                </div>
            )
        }
    }

    if(mode === 'manga') {
        const { data, error, isLoading } = mangaAPI.useFetchMangaCharactersQuery(id);

        if (isLoading) {
            return (
                <div className="title-page__info__characters-list bg-secondary-subtle">
                    <Spinner variant='primary' />
                </div>
            )
        }

        if(error) {
            return (
                <div className="title-page__info__characters-list bg-secondary-subtle">
                    <h1>Error occured</h1>
            </div>
            )
        }

        if (data) {
            return (
                <div className="title-page__info__characters-list bg-secondary-subtle">
                    {data.data.map(character => <CharacterCard
                        character={character.character}
                        voiceActors={null}
                        key={character.character.mal_id}
                        role={character.role}
                    />)}
                </div>
            )
        }
    }
}

export default CharactersList