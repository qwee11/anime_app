import React, { useState } from 'react'

import { Button, Card } from 'react-bootstrap';
import CharacterModal from '../CharacterModal/CharacterModal';

import { voiceActor } from '../../../../services/models';

import './styles.scss'

type props = {
    character: {
        mal_id: number,
        images: {
            webp: {
                image_url: string
            }
        },
        name: string,
    },
    voiceActors: voiceActor[] | null
}

const CharacterCard: React.FC<props> = ({ character, voiceActors}) => {

    const [showCharacterModal, setShowCharacterModal] = useState(false);

    return (
        <Card className='character-card' >
            <Card.Img variant="top" src={character.images.webp.image_url} />
            <Card.Body>
                <Card.Title className='text-dotted' >{character.name}</Card.Title>
            </Card.Body>

            {voiceActors ? <Button onClick={() => setShowCharacterModal(true)} >Open more</Button> : <div></div> }
            <Card.Footer>
                {voiceActors ?
                        <CharacterModal
                            closeModal={() => setShowCharacterModal(false)}
                            show={showCharacterModal}
                            character={character}
                            voice_actors={voiceActors}
                        />
                    : <></>}
            </Card.Footer>
        </Card>
    );
};

export default CharacterCard;