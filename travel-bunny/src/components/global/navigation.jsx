import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar variant="light" bg="light" sticky="top">
            <Navbar.Brand href="/">Nordico</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Link to='/' className="nav-link"><li>Front</li></Link>
                    <Link to='/Browse' className="nav-link"><li>Browse</li></Link>
                    <Link to='/Trip' className="nav-link"><li>Trip</li></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;