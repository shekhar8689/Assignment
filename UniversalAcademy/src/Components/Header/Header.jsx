import React from 'react'
import './Header.css'
import UHSLogo from '../../Assets/UHSLogo.png';
import PaceLogo from '../../Assets/PaceLogo.png';
import Button from '../../Button.jsx'
import { Navbar, Container, } from 'react-bootstrap'


function Header() {
    return (
        <Navbar className="bg-body-tertiary header-navbar">
      <Container>
        <Navbar.Brand ><img src={UHSLogo} alt="UHSLogo" /></Navbar.Brand>
        <div className="navbar-separator"></div>
        <Navbar.Brand ><img src={PaceLogo} alt="PaceLogo" /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button>Get Info</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header