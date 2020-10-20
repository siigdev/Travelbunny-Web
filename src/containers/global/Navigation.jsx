import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar variant="light" bg="light" sticky="top">
            <Navbar.Brand><Link to='/'>Nordico</Link></Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Link to='/Login' className="nav-link"><li>Login</li></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;