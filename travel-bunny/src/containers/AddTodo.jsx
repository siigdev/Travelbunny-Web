import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todo'
// eslint-disable-next-line
import { Form, InputGroup, FormControl, Button, Container, Col } from 'react-bootstrap';

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <Container className="search-container" fluid>
    <Container className="search-box">
      <Form inline onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
      }}>
          <Form.Group>
            
            <div class="search-title">
          <h5>
              Start exploring
            </h5>
            </div>
            <Form.Label htmlFor="input-destination">Where?</Form.Label>
            <InputGroup>
            <Form.Control
              type="text"
              className="mx-sm-2"
              id="input-destination"
              aria-describedby="destination-help"
            />
            </InputGroup>
            <Form.Label htmlFor="input-calendar">When?</Form.Label>
              <InputGroup>
              <Form.Control
                type="text"
                className="mx-sm-2"
                id="input-calendar"
                aria-describedby="calendar-help"
              />
            
            </InputGroup>
            <Form.Label htmlFor="input-duration">What?</Form.Label>
            <InputGroup>
            <Form.Control
              type="text"
              className="mx-sm-2"
              id="input-duration"
              aria-describedby="duration-help"
            />
            </InputGroup>
            
          <Col xs="auto">
            <Button type="submit" className="mb-2 search-trips-button">
              Submit
            </Button>
          </Col>
          </Form.Group>
        </Form>
    </Container>
    </Container>
  )
}

export default connect()(AddTodo)


