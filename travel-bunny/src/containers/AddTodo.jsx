import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todo'
import { Form, InputGroup, FormControl, Button, Container, Row, Col } from 'react-bootstrap';

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <Container className="search-container">
    <Container className="search-box">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
      }}>
        <Row>
          <Col>
          <span>Plan your trip!</span>
          </Col>
          <Col>
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          </Col>
          <Col>
          <InputGroup className="mb-3">
            <FormControl id="location-search" aria-describedby="location-search" />
            <InputGroup.Append>
              <InputGroup.Text id="location-search">
                :)
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          </Col>
          <Col>
          <label htmlFor="calendar-search">When?</label>
          </Col>
          <Col>
          <InputGroup className="mb-3">
            <FormControl id="calendar-search" aria-describedby="calendar-search" />
            <InputGroup.Append>
              <InputGroup.Text id="calendar-search">
                :)
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          </Col>
          <Col>
          <label htmlFor="location-search">What?</label>
          </Col>
          <Col>
          <InputGroup className="mb-3">
            <FormControl id="duration-search" aria-describedby="duration-search" />
            <InputGroup.Append>
              <InputGroup.Text id="duration-search">
                :)
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          </Col>
          <Col>
            <Button className="search-trips-button" variant="primary">Primary</Button>
            </Col>
        </Row>
      </form>
    </Container>
    </Container>
  )
}

export default connect()(AddTodo)


