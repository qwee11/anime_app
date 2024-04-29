import React from 'react'
import TitleCard from '../../../components/TitleCard/TitleCard';
import { Anime, Manga } from '../../../services/models';

type props = {
    titleList: Anime[] | Manga[],
    isError: boolean
}

const DisplayFound: React.FC<props> = ({titleList, isError}) => {

  if(isError) {
    return (
      <div className='search-page__display-found__error' >
        <h1>
          Error occured
        </h1>
      </div>
    )
  }

  return (
    <div className='search-page__display-found' >
        { titleList.length === 0 ? <h1>Nothing found!</h1> : titleList.map(title => {
            return <TitleCard 
            type={title.type}
            img={title.images.webp.image_url}
            mal_id={title.mal_id}
            synopsis={title.synopsis}
            title={title.title_english || title.title}
            key={title.mal_id + Math.random()}
            />
        })}
    </div>
  );
};

export default DisplayFound;