import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import SignInModal from '../../../containers/modals/SignInModal';

class SignedOutNavigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalOpen: false
        }
    }
    handleSignInModal = () => {
        this.setState((prevState) => {
           return{
              modalOpen: !prevState.modalOpen
           }
        })
    }
    render() {
        return (
            <>
                <Nav>
                    <NavItem className="nav-link" onClick={this.handleSignInModal}><li>Sign In</li></NavItem>
                </Nav>
                <SignInModal
                    modalOpen={this.state.modalOpen}
                    handleSignInModal={this.handleSignInModal}
                />
            </>
        )
    }
}

export default SignedOutNavigation