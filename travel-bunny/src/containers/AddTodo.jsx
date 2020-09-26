import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { Form, InputGroup, FormControl, Button, Container, Col } from 'react-bootstrap';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '2020-09-24',
      endDate: '2020-10-15',
      city: 'Copenhagen',
      country: 'DK',
      stayLength: 20,
      locale: 'en-US',
      currency: 'CNY'
    }
  }
  searchTrip() {
    var params = new URLSearchParams({
      windowStart: this.state.startDate,
      windowEnd: this.state.endDate,
      initialLocation: this.state.city,
      stayLength: this.state.stayLength,
      country: this.state.country,
      currency: this.state.currency,
      locale: this.state.locale
  })
    fetch("https://18xxfn4v22.execute-api.eu-central-1.amazonaws.com/Prod/?" + params)
      .then(response => response.json())
      .then(response => {
        this.props.history.push({
          pathname: '/Browse',
          res: response,
        })
      })
      .catch((error) => {
        console.warn(error)
      });
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
              {/* <Link to={{
                pathname: '/Browse',
                browseProps: {
                  test: this.state
                }
              }}> */}
                <Button type="submit" className="mb-2 search-trips-button" onClick={() => this.searchTrip()}>
                  Submit
                </Button>
              {/* </Link> */}
            </Col>
            </Form.Group>
          </Form>
      </Container>
      </Container>
    )
  }
}



