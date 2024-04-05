import React, { SetStateAction } from 'react'
import { Button, Modal, Tab, Tabs } from 'react-bootstrap'
import './style.scss'

type voiceActor = {
    person: {
        mal_id: number,
        images: {
            jpg: {
                image_url: string
            }
        },
        name: string
    },
    language: string
}

type props = {
    show: boolean,
    closeModal: () => void;
    character: {
        mal_id: number,
        images: {
            webp: {
                image_url: string
            }
        },
        name: string,
    },
    voice_actors: voiceActor[]
}

const CharacterModal: React.FC<props> = ({ show, closeModal, character, voice_actors }) => {
    
    return (
        <Modal
            show={show}
            onHide={closeModal}
            size="lg"
            className='character-modal'
            aria-labelledby="character-modal"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="character-modal">
                    {character.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='character-modal__content' >
                    <div className="character-modal__content__character">
                        <img src={character.images.webp.image_url} alt="img" />
                    </div>
                    <div className='character-modal__content__voice-actors' >
                        <Tabs
                            fill
                            defaultValue={'Japanese' || 'English'}
                            id="voice-actors-tabs"
                        >
                            {voice_actors.map((actor, index) => {
                                console.log(actor);
                                return (
                                    <Tab eventKey={actor.language + actor.person.mal_id} key={actor.person.mal_id} title={actor.language} >
                                        <div className='character-modal__content__voice-actors__actor' >
                                        <img src={actor.person.images.jpg.image_url} alt="img" />
                                        <p>
                                            {actor.person.name}
                                        </p>
                                        </div>
                                    </Tab>
                                )
                            })}
                        </Tabs>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CharacterModal