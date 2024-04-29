import React from 'react'

type props = {
    imgUrl: string,
    isBroadcastring: boolean,
    title: string,
    mode: 'anime' | 'manga'
}

const Heading: React.FC<props> = ({imgUrl, isBroadcastring, title, mode}) => {
    const isBroadcastringWithMode = () => {
        if(mode === 'anime') {
            return isBroadcastring ? 'Airing' : 'Not airing'
        }
        return isBroadcastring ? 'Publishind' : 'Not publishing'
    }

    return (
        <div>
            <div className="title-page__background" style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: '100%',
                backgroundPosition: 'center'
            }} ></div>
            <div className="title-page__content">
                <div className="title-page__content__image">
                    <img src={imgUrl} alt="img" />
                    <div className="title-page__content__image__text  bg-body-tertiary">
                        {isBroadcastringWithMode()}
                    </div>
                </div>
                <div className='title-page__content__main' >
                    <div className="title-page__content__main__name ">
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading