import React from 'react'
import './style.scss';
import Heading from './components/Heading';
import TitlesShowcase from './components/TitlesShowcase';

type props = {
  mode: 'anime' | 'manga'
}

const HomePage: React.FC<props> = ({ mode }) => {

  return (
    <div className='home-page' >
      <Heading />
      <div className='home-page__titles' >
        {mode === 'manga' ?
          <TitlesShowcase argFilter='publishing' heading={'Publishing ' + mode} mode={mode} />
          : <TitlesShowcase argFilter='upcoming' heading={'Upcoming ' + mode} mode={mode} />
        }
        <TitlesShowcase argFilter='bypopularity' heading={'Popular ' + mode} mode={mode} />
      </div>
    </div>
  )
};

export default HomePage;