import React from 'react'
import './style.scss';
import Header from './components/Header';
import TitlesShowcase from './components/TitlesShowcase';

type props = {
  mode: 'anime' | 'manga'
}

const HomePage: React.FC<props> = ({ mode }) => {

  return (
    <div className='home-page' >
      <Header />
      <div className='home-page__titles' >
        {mode === 'manga' ?
          <TitlesShowcase argFilter='upcoming' heading={'Publishing ' + mode} mode={mode} />
          : <TitlesShowcase argFilter='upcoming' heading={'Upcoming ' + mode} mode={mode} />
        }
        <TitlesShowcase argFilter='bypopularity' heading={'Popular ' + mode} mode={mode} />
      </div>
    </div>
  )
};

export default HomePage;