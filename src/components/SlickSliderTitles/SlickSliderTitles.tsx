import React from 'react'
import Slider from 'react-slick'
import TitleCard from '../TitleCard/TitleCard';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'
import { Anime, Manga } from '../../services/models';

const settings = {
  centerMode: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 3,
  initialSlide: 0,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 6000,
  cssEase: "ease",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

type props = {
  titles: Anime[] | Manga[]
}

const SlickSliderTitles: React.FC<props> = ({ titles }) => {
  return (
    <div className="slick-slider">
      <Slider {...settings}>
        {titles.map(title =>
          <div key={title.mal_id} className='slick-slider__card-wrapper' >
            <TitleCard
            type={title.type}
            synopsis={title.synopsis} 
            img={title.images.webp.image_url}
            mal_id={title.mal_id}
            title={title.title_english || title.title}
            key={title.mal_id}
            />
          </div>
        )}
      </Slider>
    </div>
  )
}

export default SlickSliderTitles