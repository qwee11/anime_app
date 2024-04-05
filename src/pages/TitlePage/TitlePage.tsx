import React, { useEffect, useRef, useState } from 'react'
import './style.scss';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useParams } from 'react-router-dom';
import { animeAPI } from '../../services/animeService';
import Heading from './components/Heading';
import { mangaAPI } from '../../services/mangaService';
import TitleInfo from './components/TitleInfo';
import { Spinner } from 'react-bootstrap';

ChartJS.register(ArcElement, Tooltip, Legend);

type props = {
  mode: 'anime' | 'manga'
}

const TitlePage: React.FC<props> = ({ mode }) => {
  const id = useParams().id!;

  if (mode === 'anime') {
    const { data: animeFull, error, isLoading } = animeAPI.useFetchAnimeFullQuery(id);


    if (error) {
      return <h1>Error occured!</h1>
    }

    if (isLoading) {
      return <div className='spinner'><Spinner variant='primary' animation='grow' /></div>
    }

    if (animeFull) {
      return (
        <div className='title-page' >
          <Heading
            imgUrl={animeFull.data.images.webp.large_image_url}
            isBroadcastring={animeFull.data.airing}
            mode='anime'
            title={animeFull.data.title_english || animeFull.data.title}
          />
          <TitleInfo
            id={id}
            mode={mode}
            popularity={animeFull.data.popularity}
            rank={animeFull.data.rank}
            score={animeFull.data.score}
            synopsis={animeFull.data.synopsis}
            titleGenres={animeFull.data.genres}
            trailerEmbedUrl={animeFull.data.trailer.embed_url}
          />
        </div >
      )
    }
  }

  if (mode === 'manga') {
    const { data: mangaFull, error, isLoading } = mangaAPI.useFetchMangaFullQuery(id);


    if (error) {
      return <h1>Error occured!</h1>
    }

    if (isLoading) {
      return <h1>Loading...</h1>
    }

    if (mangaFull) {
      return (
        <div className='title-page' >
          <Heading
            imgUrl={mangaFull.data.images.webp.large_image_url}
            isBroadcastring={mangaFull.data.publishing}
            mode='manga'
            title={mangaFull.data.title_english || mangaFull.data.title}
          />
          <TitleInfo
            id={id}
            mode={mode}
            popularity={mangaFull.data.popularity}
            rank={mangaFull.data.rank}
            score={mangaFull.data.score}
            synopsis={mangaFull.data.synopsis}
            titleGenres={mangaFull.data.genres}
            trailerEmbedUrl={null}
          />
        </div >
      )
    }
  }
}

export default TitlePage