import React, { useContext, useState } from 'react'
import animePic from '../../../assets/animePic.png';

const Header = () => {

    return (
            <div className="home-page__heading">
                <div className="home-page__heading__main">
                    <div>
                        <h1 className='home-page__heading__main__greeting' >
                            Welcome
                        </h1>
                        <p className='home-page__heading__main__info' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ullam et, inventore quos officiis magni doloribus saepe cumque perspiciatis a esse harum error deserunt? Repudiandae ratione quam nesciunt libero perspiciatis.
                        </p>
                    </div>
                </div>
                <div className="home-page__heading__secondary">
                    <img src={animePic} alt="animePic" />
                </div>
            </div>
    )
}

export default Header