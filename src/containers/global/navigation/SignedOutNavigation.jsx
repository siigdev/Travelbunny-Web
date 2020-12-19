import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import LoginModal from '../../../containers/modals/LoginModal';

class SignedOutNavigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalOpen: false
        }
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
            <>
                <Nav>
                    <NavItem className="nav-link" onClick={this.handleLoginModal}><li>Sign In</li></NavItem>
                </Nav>
                <LoginModal
                    modalOpen={this.state.modalOpen}
                    handleLoginModal={this.handleLoginModal}
                />
            </>
        )
    }
}

export default SignedOutNavigation