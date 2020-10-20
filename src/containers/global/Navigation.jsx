import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import LoginModal from '../../containers/modals/LoginModal'

export default class Navigation extends Component {
    state = {
        modalOpen: false
    }
    handleLoginModal = () => {
        this.setState((prevState) => {
           return{
              modalOpen: !prevState.modalOpen
           }
        })
     }

    render() {
        return (
            <Navbar variant="light" bg="light" sticky="top">
                <Navbar.Brand><Link to='/'>Nordico</Link></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <NavItem className="nav-link" onClick={this.handleLoginModal}><li>Login</li></NavItem>
                    </Nav>
                </Navbar.Collapse>
                <LoginModal
                    modalOpen={this.state.modalOpen}
                    handleLoginModal={this.handleLoginModal}
                />
            </Navbar>
        )
    }
}