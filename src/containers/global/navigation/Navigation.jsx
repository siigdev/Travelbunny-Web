import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import SignedInNavigation from './SignedInNavigation';
import SignedOutNavigation from './SignedOutNavigation'
import * as timeHelper from '../../../helpers/timeHelper'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class Navigation extends Component {
    render() {
        return (
            <Navbar variant="light" bg="light" sticky="top">
                <Navbar.Brand><Link to='/'>Nordico</Link></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                {this.props.signedIn ? <SignedInNavigation /> : <SignedOutNavigation />}
                <Nav>
                    <NavItem className="nav-link purchase-nav-item">
                        <li>{timeHelper.convertSecondsToClock(this.props.counter, 'MMSS')} <FontAwesomeIcon icon={faShoppingCart} size="xs" /></li>
                    </NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.signedIn,
        reservedTime: state.trip.reservedTime,
        counter: state.trip.timer.counter
    }
}

export default connect(mapStateToProps)(Navigation);