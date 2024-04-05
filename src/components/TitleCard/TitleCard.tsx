import React from 'react'
import { Card } from 'react-bootstrap';
import './style.scss';
import { NavLink } from 'react-router-dom';

type mangaTypes = "Manga" | "Novel" | "Lightnovel" | "Oneshot" | "Doujin" | "Manhwa" | "Manhua"

const mangaVariant = ["Manga", "Novel", "Lightnovel", "Oneshot", "Doujin", "Manhwa", "Manhua"]

type props = {
    mal_id: number,
    title: string,
    img: string,
    synopsis: string;
    type: mangaTypes  | string
}

const TitleCard: React.FC<props> = ({ mal_id, img, title, synopsis, type }) => {
    return (
        <NavLink to={mangaVariant.includes(type) ? '/manga/' + mal_id : '/anime/' + mal_id} >
            <Card className='title-card c-pointer' >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-dotted' >{title}</Card.Title>
                    <Card.Text className='text-dotted-line-2' >{synopsis}</Card.Text>
                </Card.Body>
            </Card>
        </NavLink>
    )
}

export default TitleCard