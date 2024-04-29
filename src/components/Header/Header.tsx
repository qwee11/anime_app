import { useEffect } from 'react';
import { Container,  Nav, Navbar } from 'react-bootstrap';

import './style.scss'

const switchTheme = () => {
    const currentTheme = document.querySelector('body')!.dataset['bsTheme'];
    currentTheme === 'light' ?
        document.querySelector('body')!.setAttribute('data-bs-theme', 'dark') :
        document.querySelector('body')!.setAttribute('data-bs-theme', 'light');

    localStorage.setItem('theme', currentTheme === 'light' ? 'dark' : 'light')
};

const applyTheme = () => {
    const appliedTheme = localStorage.getItem('theme');
    if(!appliedTheme) {
        return false;
    }
    if(appliedTheme === 'dark') {
        document.querySelector('body')!.setAttribute('data-bs-theme', 'dark')
    } else {
        document.querySelector('body')!.setAttribute('data-bs-theme', 'light')
    }
}

const Header = () => {

    useEffect(() => {
        applyTheme()
    }, [])

    return (
        <Navbar expand="lg" className="header bg-body-tertiary">
            <Container>
                <Navbar.Brand href='/' >
                    <div className='c-pointer' >
                        Anime App
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto header__nav">
                        <Nav.Link href='/home/manga' >
                            <div className='c-pointer' >
                                Manga
                            </div>
                        </Nav.Link>
                        <Nav.Link href='/search/anime' >
                            <div className='c-pointer' >
                                Search
                            </div>
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
    );
};

export default Header;