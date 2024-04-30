import React from 'react'

import { Spinner } from 'react-bootstrap'
import CharacterCard from './CharacterCard/CharacterCard'

import { getCharactersWithMode } from '../withModeFunctions'

type props = {
    mode: 'anime' | 'manga',
    id: string
}

const CharactersList: React.FC<props> = ({ id, mode }) => {

    const {data, error, isLoading} = getCharactersWithMode(mode)(id);
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
                />)}
            </div>
        );
    };
};

export default CharactersList;