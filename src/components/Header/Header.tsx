import React, { useContext, useState } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import './style.scss'
import { NavLink } from 'react-router-dom';

const switchTheme = () => {
    const currentTheme = document.querySelector('body')!.dataset['bsTheme'];
    currentTheme === 'light' ?
        document.querySelector('body')!.setAttribute('data-bs-theme', 'dark') :
        document.querySelector('body')!.setAttribute('data-bs-theme', 'light');
};

const Header = () => {

    return (
        <Navbar expand="lg" className="header bg-body-tertiary">
            <Container>
                <Navbar.Brand href='/' >
                        Anime App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto header__nav">
                        <Nav.Link href='/home/manga' >
                                Manga
                        </Nav.Link>
                        <Nav.Link as={'div'} >
                            <NavLink to={'/search/anime'} >
                                Search
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link as={'div'} >
                            <div className='c-pointer' onClick={switchTheme} >
                                Switch theme
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header