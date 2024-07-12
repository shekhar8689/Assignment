import React from 'react'
import './Header.css'
import UHSLogo from '../../Assets/UHSLogo.png';
import PaceLogo from '../../Assets/PaceLogo.png';
import Button from '../../Button.jsx'
import {Navbar, Container, Nav} from 'react-bootstrap'


function Header() {
    return (

            <Navbar expand="lg" className="header-navbar">
            <Container className='header-navbar-con'>
                <Navbar.Brand href="#" className='Brand-flex'>
                    <img
                        src={UHSLogo} 
                        alt="Universal High School"
                        height="35"
                    />
                    <div className='vr'></div>
                    <img
                        src={PaceLogo} 
                        alt="Pace"
                        height="35"
                    />

                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Button style={{width: '120.44px', height: '54.16px'}}>Get info</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header