import React, { Component } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signIn } from '../../actions/authenticationActions/authenticationActions'

class LoginModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            modalOpen: true
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
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
                <Modal show={this.props.modalOpen} onHide={this.props.handleLoginModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Keep me logged in" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
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
export default connect(null, mapDispatchToProps)(LoginModal)