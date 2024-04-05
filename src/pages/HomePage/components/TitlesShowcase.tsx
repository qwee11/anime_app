import React from 'react'
import { Anime, Manga, topAnimeArgs, topMangaArgs } from '../../../services/models'
import { animeAPI } from '../../../services/animeService'
import SlickSliderTitles from '../../../components/SlickSliderTitles/SlickSliderTitles'
import { Spinner } from 'react-bootstrap'
import { mangaAPI } from '../../../services/mangaService'

type props = {
  mode: "anime" | 'manga',
  heading: string,
  argFilter: 'bypopularity' | 'upcoming'
}

const TitlesShowcase: React.FC<props> = ({ mode, argFilter, heading }) => {
  if (mode === 'anime') {

    const { data, error, isLoading } = animeAPI.useFetchTopAnimeQuery({ filter: argFilter, page: 1 });

    if (error) {
      return <h1>Error occured!</h1>
    }

    return (
      <div className='home-page__titles__item'>
        <h3 className='home-page__titles__item__err' >
          {heading}
        </h3>
        {isLoading ? <Spinner variant='primary' animation='border' /> : data && <SlickSliderTitles titles={data.data} />}
      </div>
    )
  }

  if (mode === 'manga') {
    // SOMEWHY NOT ALL FILTER WORKING IN MANGA ENDPOINT.
    const { data, error, isLoading } = mangaAPI.useFetchTopMangaQuery({ filter: argFilter === 'upcoming' ? 'publishing' : argFilter, page: 1 });

    if (error) {
      return <h1 className='home-page__titles__item__err' >Error occured!</h1>
    }

    console.log(data);

    return (
      <div className='home-page__titles__item'>
        <h3>
          {heading}
        </h3>
        {isLoading ? <Spinner variant='primary' animation='border' /> : data && <SlickSliderTitles titles={data.data} />}
      </div>
    )
  }
}

export default TitlesShowcase