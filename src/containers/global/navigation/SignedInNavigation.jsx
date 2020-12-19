import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signOut } from '../../../actions/authenticationActions/authenticationActions'


class SignedInNavigation extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Nav>
                <NavItem className="nav-link" onClick={this.props.signOut}><NavLink to='/'>Velkommen!</NavLink></NavItem>
            </Nav>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInNavigation)