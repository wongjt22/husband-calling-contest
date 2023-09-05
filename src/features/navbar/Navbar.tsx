import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap";
import { SpeakerWaveIcon } from '@heroicons/react/24/solid'
import './NavBar.css'


export const NavBar = () => {
    return (
      <div>
        <Navbar className="navbar">
            <Container className="navbar-container">
                <Navbar.Brand href="/" className="nav-brand">
                  <SpeakerWaveIcon className="small-icon"/>
                    Husband Calling Contest
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link className="nav-link" href="/about">About</Nav.Link>
                        <Nav.Link className="nav-link" href="/contestants">Contestants</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
    )
}