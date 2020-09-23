import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { Form, InputGroup, FormControl, Button, Container, Col } from 'react-bootstrap';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '1',
      endDate: '1',
      city: 'Shanghai',
      country: 'CH',
      stayLength: 20,
      currency: 'EUR'
    }
  }
  render() {
    return (
      <Container className="search-container" fluid>
      <Container className="search-box">
        <Form inline onSubmit={e => {
          e.preventDefault()
        }}>
            <Form.Group>
              
              <div className="search-title">
            <h5>
                Start exploring
              </h5>
              </div>
              <Form.Label htmlFor="input-city">Where?</Form.Label>
              <InputGroup>
              <Form.Control
                type="text"
                className="mx-sm-2"
                id="input-city"
                aria-describedby="city-help"
                defaultValue={this.state.city}
                onChange={(event)=>this.setState({value: event.target.value})}
              />
              </InputGroup>
              <Form.Label htmlFor="input-start-date">When?</Form.Label>
                <InputGroup>
                <Form.Control
                  type="text"
                  className="mx-sm-2"
                  id="input-start-date"
                  aria-describedby="start-date-help"
                  defaultValue={this.state.startDate}
                  onChange={(event)=>this.setState({startDate: event.target.value})}
                />
              
              </InputGroup>
              <Form.Label htmlFor="input-end-date">What?</Form.Label>
              <InputGroup>
              <Form.Control
                type="text"
                className="mx-sm-2"
                id="input-end-date"
                aria-describedby="end-date-help"
                defaultValue={this.state.endDate}
                onChange={(event)=>this.setState({endDate: event.target.value})}
              />
              </InputGroup>
              
            <Col xs="auto">
              <Link to={{
                pathname: '/Browse',
                browseProps: {
                  test: this.state
                }
              }}>
                <Button type="submit" className="mb-2 search-trips-button">
                  Submit
                </Button>
              </Link>
            </Col>
            </Form.Group>
          </Form>
      </Container>
      </Container>
    )
  }
}



