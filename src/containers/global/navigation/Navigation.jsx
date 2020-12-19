import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import LoginModal from '../../../containers/modals/LoginModal';
import SignedInNavigation from './SignedInNavigation';
import SignedOutNavigation from './SignedOutNavigation'
import { connect } from 'react-redux';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Navbar variant="light" bg="light" sticky="top">
                <Navbar.Brand><Link to='/'>Nordico</Link></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                {this.props.auth ? <SignedInNavigation /> : <SignedOutNavigation />}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.login.auth
    }
}
export default connect(mapStateToProps)(Navigation);

//<LoginModal
//modalOpen={this.state.modalOpen}
//handleLoginModal={this.handleLoginModal}
///>