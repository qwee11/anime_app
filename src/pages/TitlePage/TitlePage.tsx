import React, { useEffect } from 'react'
import './style.scss';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Heading from './components/Heading';
import TitleInfo from './components/TitleInfo';
import { Spinner } from 'react-bootstrap';
import { getTitleFullWithMode } from './withModeFunctions';

ChartJS.register(ArcElement, Tooltip, Legend);

type props = {
  mode: 'anime' | 'manga'
}

const TitlePage: React.FC<props> = ({ mode }) => {
  const id = useParams().id!;

  const navigate = useNavigate();

  const { data, error, isLoading } = getTitleFullWithMode(mode)(id);

  useEffect(() => {
    if (error) {
      navigate('/error');
    }
  }, [error])


  if (error) {
    return <>Erorr zxc</>;
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
          mode='anime'
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