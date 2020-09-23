import React from 'react'
// eslint-disable-next-line
import { Container } from 'react-bootstrap';

const AddTodo = (props) => {
  console.log(props.location.browseProps);
  return (
    <Container className="browse-container" fluid>
        <h1>Browse</h1>
    </Container>
  )
}

export default AddTodo


