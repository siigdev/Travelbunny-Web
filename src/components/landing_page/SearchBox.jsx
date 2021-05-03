import React, { Component } from 'react';
// eslint-disable-next-line
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { InputGroup, Button, Container, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import cities from '../../constants/cities';
import { Typeahead } from 'react-bootstrap-typeahead';
import { saveSearchoptions } from '../../actions/tripActions/tripActions'

const citiesList = cities.map(x => x.value);
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

        this.props.saveSearchoptions(this.state.stayLength, this.state.city, startDate, endDate);
        this.props.history.push({
            pathname: `/Browse/${startDate}/${endDate}/${this.state.city}/${this.state.stayLength}/${this.state.country}/`,
            res: "response",
            new:  true
        })
    }
    render() {
        return (
            <Container className="search-container" fluid>
                {/* <h2 align="center" style={{color: 'white'}}>Answer 5 simple questions and our algorithm will create the perfect trip ideas for you</h2> */}
                <Container className="search-box">
                    {/* <StepSelector history={this.props.history}/> */}
                    <Form inline onSubmit={e => {
                        e.preventDefault()
                    }}>
                        
                         <Form.Group>
                            <div className="search-title">
                                <h5>
                                    Start exploring
                                </h5>
                            </div>
                            
                            <Form.Label htmlFor="input-city">Where are you?</Form.Label>
                            <Typeahead
                                id="basic-typeahead-single"
                                aria-describedby="city-help"
                                labelKey="name"
                                className="mx-sm-2"
                                onChange={(event) => this.setState({ city: event[0] })}
                                options={citiesList}
                                placeholder="Select your location"
                                />
                            
                            <Form.Label htmlFor="input-start-date">Search range: </Form.Label>
                            <InputGroup>

                                <DatePicker
                                    className="mx-sm-2 form-control"
                                    selected={this.state.startDate}
                                    onChange={date => this.setState({ startDate: date })}
                                    placeholderText="Select start date"
                                    minDate={new Date()}
                                />
                            </InputGroup>
                            <Form.Label htmlFor="input-end-date">To: </Form.Label>
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

const mapDispatchToProps = (dispatch) => {
    return {
        saveSearchoptions: (tripLengthState, departureState, startDate, endDate) => dispatch(saveSearchoptions(tripLengthState, departureState, startDate, endDate))
    }
  }
export default connect(null, mapDispatchToProps)(withRouter(SearchBox))