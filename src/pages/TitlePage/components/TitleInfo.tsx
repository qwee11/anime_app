import React from 'react'

import DisplayStatistics from './DisplayStatistics'
import CharactersList from './CharactersList'

import { titleGenres } from '../../../services/models'

type props = {
    titleGenres: titleGenres[],
    score: number | null,
    rank: number | null,
    popularity: number | null,
    synopsis: string,
    trailerEmbedUrl: string | null,
    id: string,
    mode: 'anime' | 'manga'
}

const TitleInfo: React.FC<props> = ({
    popularity,
    rank,
    score,
    synopsis,
    titleGenres,
    trailerEmbedUrl,
    id,
    mode
}) => {

    return (
        <div className="title-page__info">
            <div className="title-page__info__genres">
                {titleGenres.map(genre => {
                    return (
                        <div key={genre.mal_id} className="title-page__info__genres__genre bg-body-tertiary">
                            {genre.name}
                        </div>
                    )
                })}
            </div>
            <div className="title-page__info__score bg-body-tertiary">
                <div className='title-page__info__score__item' >
                    <div>
                        Score
                    </div>
                    <div>
                        {score || 'No information'}
                    </div>
                </div>
                <div className='title-page__info__score__item ' >
                    <div>
                        Rank
                    </div>
                    <div>
                        {rank || 'No information'}
                    </div>
                </div>
                <div className='title-page__info__score__item' >
                    <div>
                        Popularity
                    </div>
                    <div>
                        {popularity || 'No information'}
                    </div>
                </div>
            </div>
            <div className="title-page__info__synopsis small p-3 fw-italic rounded bg-body-tertiary">
                <h5 className="title-page__info__synopsis__header">
                    Synopsis
                </h5>
                {synopsis}
            </div>
            {trailerEmbedUrl ?
                <div className="title-page__info__trailer p-3 rounded bg-secondary-subtle d-flex justify-content-center">
                    <iframe
                        src={trailerEmbedUrl}>
                    </iframe>
                </div>
                : <></>
            }
            <DisplayStatistics
                id={id}
                mode={mode}
            />
            <CharactersList
            id={id}
            mode={mode}
            />
        </div>
    )
}

export default TitleInfo