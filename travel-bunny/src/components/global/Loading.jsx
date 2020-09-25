import React from 'react'
import { Container, Spinner } from 'react-bootstrap';

const Loading = () => (
    <Container className="loading-container">
        <Spinner animation="border" variant="primary" />
    </Container>
)

export default Loading
