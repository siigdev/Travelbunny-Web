import React, { Component } from 'react';
// eslint-disable-next-line
import { withRouter } from 'react-router-dom';
import { InputGroup, Button, Container, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import StepSelector from '../landing_page/stepSelector/StepSelector'

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            city: 'Copenhagen',
            country: 'DK',
            stayLength: 14,
            locale: 'en-US',
            currency: 'CNY'
        }
    }
    searchTrip() {
        //Format datetimes: 'YYYY-MM-DD'
        let startDate = this.state.startDate.toISOString().slice(0, 10);
        let endDate = this.state.endDate.toISOString().slice(0, 10);

        this.props.history.push({
            pathname: `/Browse/${startDate}/${endDate}/${this.state.city}/${this.state.stayLength}/${this.state.country}/`,
            res: "response",
            state: { new: true}
        })
    }
    render() {
        return (
            <Container className="search-container" fluid>
                {/* <h2 align="center" style={{color: 'white'}}>Answer 5 simple questions and our algorithm will create the perfect trip ideas for you</h2> */}
                <Container className="search-box">
                    {/* <StepSelector/> */}
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
                                    onChange={(event) => this.setState({ city: event.target.value })}
                                />
                            </InputGroup>
                            <Form.Label htmlFor="input-start-date">From?</Form.Label>
                            <InputGroup>
                                <DatePicker
                                    className="mx-sm-2 form-control"
                                    selected={this.state.startDate}
                                    onChange={date => this.setState({ startDate: date })}
                                    placeholderText="Select start date"
                                    minDate={new Date()}
                                />
                            </InputGroup>
                            <Form.Label htmlFor="input-end-date">To?</Form.Label>
                            <InputGroup>
                                <DatePicker
                                    className="mx-sm-2 form-control"
                                    selected={this.state.endDate}
                                    onChange={date => this.setState({ endDate: date })}
                                    placeholderText="Select end date"
                                    minDate={this.state.startDate}
                                />
                            </InputGroup>

                            <Col xs="auto">
                                <Button type="submit" className="mb-2 search-trips-button" onClick={() => this.searchTrip()}>
                                    Search
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Container>
            </Container>
        )
    }
}

export default withRouter(SearchBox)