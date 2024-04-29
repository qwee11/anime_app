import React from 'react'

import SlickSliderTitles from './SlickSliderTitles/SlickSliderTitles'
import { Spinner } from 'react-bootstrap'

import { getTopTitlesWithMode } from '../withModeFunctions'

type props = {
  mode: "anime" | 'manga',
  heading: string,
  argFilter: string
}

const TitlesShowcase: React.FC<props> = ({ mode, argFilter, heading }) => {

  const { data, error, isLoading } = getTopTitlesWithMode(mode)({ 
    filter: argFilter,
    page: 1 });

  if (error) {
    return <h1 className='home-page__titles__item__err' >Error occured!</h1>
  }

  return (
    <div className='home-page__titles__item'>
      <h3 className='home-page__titles__item' >
        {heading}
      </h3>
      {isLoading ? <Spinner variant='primary' animation='border' /> : data && <SlickSliderTitles titles={data.data} />}
    </div>
  );
};

export default TitlesShowcase;