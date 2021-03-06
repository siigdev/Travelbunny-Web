import React, { Component } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signIn } from '../../actions/authenticationActions/authenticationActions'

class SignInModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            modalOpen: true,
            validated: false
        }
    }
    handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.setState({validated: true})
        this.props.signIn(this.state)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (
            <>
                <Modal show={this.props.modalOpen} onHide={this.props.handleSignInModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                            <Form.Group controlId="email">
                                <Form.Label>Email address</Form.Label>
                                    <Form.Control required type="email" placeholder="Enter email" onChange={this.handleChange} />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid email.
                                    </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password" onChange={this.handleChange} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid password.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}
const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.signedIn
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInModal)