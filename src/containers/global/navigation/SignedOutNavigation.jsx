import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signIn } from '../../../actions/authenticationActions/authenticationActions'


class SignedOutNavigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: 'test',
            password: 'test123'
        }
    }
    handleSubmit(){
        console.log(this.state);
        console.log(this.props)
        this.props.signIn(this.state)
    }
    render() {
        return (
            <Nav>
                <NavItem className="nav-link" onClick={() => this.handleSubmit()}><li>Sign In</li></NavItem>
            </Nav>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}
export default connect(null, mapDispatchToProps)(SignedOutNavigation)