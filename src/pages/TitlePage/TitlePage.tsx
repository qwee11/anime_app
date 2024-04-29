import React from 'react'

import Heading from './components/Heading';
import { Spinner } from 'react-bootstrap';
import TitleInfo from './components/TitleInfo';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { NavLink, useParams } from 'react-router-dom';
import { getTitleFullWithMode } from './withModeFunctions';

import './style.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

type props = {
  mode: 'anime' | 'manga'
}

const TitlePage: React.FC<props> = ({ mode }) => {
  const id = useParams().id!;

  const { data, error, isLoading } = getTitleFullWithMode(mode)(id);

  if (error) {
    return <div className='title-page__error' >
      <h1>
        Error occured!
      </h1>
      <div>
        <NavLink to={'/'}><p className='title-page__error__link c-pointer' >Home page</p></NavLink>
      </div>
    </div>;
  }

  if (isLoading) {
    return <div className='spinner'><Spinner variant='primary' animation='grow' /></div>
  }

  if (data) {
    return (
      <div className='title-page' >
        <Heading
          imgUrl={data.data.images.webp.large_image_url}
          isBroadcastring={data.data.airing}
          mode={mode}
          title={data.data.title_english || data.data.title}
        />
        <TitleInfo
          id={id}
          mode={mode}
          popularity={data.data.popularity}
          rank={data.data.rank}
          score={data.data.score}
          synopsis={data.data.synopsis}
          titleGenres={data.data.genres}
          trailerEmbedUrl={mode === 'anime' ? data.data.trailer.embed_url : null}
        />
      </div >
    )
  }
}

export default TitlePage