import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';


export default class SignedInNavigation extends Component {
    render() {
        return (
            <Nav>
                <NavItem className="nav-link" onClick={this.handleLoginModal}><NavLink to='/'>Velkommen!</NavLink></NavItem>
            </Nav>
        )
    }
}