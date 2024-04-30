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
    role: string | null,
    voiceActors: voiceActor[] | null
}

const CharacterCard: React.FC<props> = ({ character, voiceActors, role }) => {
    
    const [showCharacterModal, setShowCharacterModal] = useState(false);

    return (
        <Card className='character-card' >
            <Card.Img variant="top" src={character.images.webp.image_url} />
            <Card.Body>
                <Card.Title className='text-dotted' >{character.name}</Card.Title>
            </Card.Body>

                <Button onClick={() => setShowCharacterModal(true)} >Open more</Button>
            <Card.Footer>
                {voiceActors ? 
                <div>
                <CharacterModal
                closeModal={() => setShowCharacterModal(false)}
                show={showCharacterModal}
                character={character}
                voice_actors={voiceActors}
                />
                </div>
            : <div>{role && role}</div>}
            </Card.Footer>
        </Card>
    );
};

export default CharacterCard;