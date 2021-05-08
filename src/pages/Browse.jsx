import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loading from '../components/global/Loading'
import LoadingTripGeneration from '../components/global/LoadingTripGeneration/LoadingTripGeneration'
import TripBox from '../components/browse_page/TripBox'
import { Container, Row, Col, Button, Form, InputGroup, FormControl, Alert } from 'react-bootstrap';
import { saveTripsToState } from '../actions/tripActions/tripActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarCheck, faSortAmountUp, faSortAmountDown, faSortNumericUp, faDollarSign, faGlobe, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import cities from '../constants/cities';
import Select, { components } from 'react-select';
import DatePicker from 'react-datepicker';
import { saveSearchoptions } from '../actions/tripActions/tripActions'
import * as timeHelper from '../helpers/timeHelper'
import { Typeahead } from 'react-bootstrap-typeahead';

const citiesList = cities.map(x => x.value);

class Browse extends Component {
    constructor(props) {
        super(props);
        this.match = props.match.params;
        this.props.saveSearchoptions(this.match.length, this.match.location, this.match.start, this.match.end);
        this.state = {
            error: '',
            loading: true,
            loadingWithSearchParams: false,
            price: 975,
            includeCountries: [],
            avoidContries: [],
            start: this.match.start,
            end: this.match.end,
            location: this.match.location,
            country: this.match.country,
            length: this.match.length
        }
    }
    componentDidMount() {
        if(this.props.trips !== null && this.props.trips !== undefined && this.props.location.new !== true) {
            this.setState({ loading: false })
        }
        else {
            this.saveStateToParamsAndSearchTrip();
        }
    }

    saveStateToParamsAndSearchTrip(){
        this.setState({loadingWithSearchParams: true}) 
        
        var params = (new URLSearchParams({
            windowStart: (typeof(this.state.start) === 'object') ? timeHelper.converDateToYYYYMMDD(this.state.start) : this.state.start,
            windowEnd: (typeof(this.state.end) === 'object') ? timeHelper.converDateToYYYYMMDD(this.state.end) :this.state.end,
            initialLocation: this.state.location,
            stayLength: this.state.length,
            country: this.state.country,
            includeCountries: this.state.includeCountries.map(item => item['value']),
            avoidContries: this.state.avoidContries.map(item => item['value']),
            currency: 'EUR',
            locale: 'en-US'
        }));
        this.searchTrip(params)
    }

    searchTrip(params) {
        fetch("https://hj240syse0.execute-api.eu-central-1.amazonaws.com/prod/?" + params)
            .then(response => response.json())
            .then(response => {
                this.props.saveTripsToState(response.trips)
                this.setState({ loading: false, loadingWithSearchParams: false })
            })
            .catch((error) => {
                this.setState({ loading: false, loadingWithSearchParams: false, error: error })
            });
    }

    viewTrip(trip) {
        this.props.history.push({
            pathname: '/Trip/' + trip.id,
            res: trip,
        })
    }
    renderTrips() {
        if (!this.state.loading &&  (this.props.trips === undefined || this.props.trips === null || !this.props.trips.length))
            return (
                <Alert variant='danger'>
                    Error! We could not find any travel packages matching your search parameters. Please <a href="javascript:window.location.reload(true)">try again</a>.
                </Alert>
            )
        else return this.props.trips.map((trip) => {
            return (
                <div onClick={() => this.viewTrip(trip)} key={trip.id} >
                    <TripBox trip={trip} />
                </div>
            );
        })
    }
    render() {
        if (this.state.loading) {
            return (
                <LoadingTripGeneration />
            )
        }
        return (
            <Container className="browse-container">

                <Row>
                    <Col>
                        <Container className="sort-box">
                            <Button variant="link"><FontAwesomeIcon icon={faCalendar} size="1x" /> Date</Button>
                            <Button variant="link" ><FontAwesomeIcon icon={faSortAmountUp} size="1x" /> Price Low to High</Button>
                            <Button variant="link"><FontAwesomeIcon icon={faSortAmountDown} size="1x" /> Price High to Low</Button>
                            <Button variant="link"><FontAwesomeIcon icon={faSortNumericUp} size="1x" /> Number of Cities</Button>
                        </Container>
                        {this.state.loadingWithSearchParams ? <Loading /> : this.renderTrips()}
                        
                    </Col>

                    <Col className="search-settings">
                        <InputGroup className="mb-2">
                        <Typeahead
                                id="locationpicker"
                                defaultSelected={citiesList.slice(citiesList.indexOf(this.state.location), citiesList.indexOf(this.state.location) + 1)}
                                className="locationpicker-form"
                                onChange={(event) => this.setState({ location: event[0] })}
                                options={citiesList}
                                placeholder="Select your location"
                                />
                            <InputGroup.Append>
                                <InputGroup.Text><FontAwesomeIcon icon={faPlaneDeparture} size="1x"/></InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <Select
                            defaultValue={[]}
                            placeholder={'Include countries'}
                            isMulti
                            name="destinations"
                            id="search-must-go-destination"
                            options={cities}
                            components={{ DropdownIndicator }}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={countryList => this.setState({ includeCountries: countryList })}
                            styles={{indicatorSeparator: (styles) => ({height: '100%', borderLeft: '1px solid #ced4da'})}}
                        />
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <Select
                            defaultValue={[]}
                            placeholder={'Avoid countries'}
                            isMulti
                            name="destinations"
                            id="search-avoid-destination"
                            options={cities}
                            components={{ DropdownIndicator }}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={countryList => this.setState({ avoidContries: countryList })}
                            styles={{indicatorSeparator: (styles) => ({height: '100%', borderLeft: '1px solid #ced4da'})}}
                        />
                        </InputGroup>
                        <InputGroup className="mb-2">
                        <DatePicker
                                    dateFormat="yyyy-MM-dd"
                                    className="form-control datepicker-form"
                                    id="search-startdate"
                                    selected={new Date(this.state.start)}
                                    onChange={date => this.setState({ start: date })}
                                    placeholderText={this.state.start}
                                    minDate={new Date()}
                                />
                            <InputGroup.Append>
                                <InputGroup.Text><FontAwesomeIcon icon={faCalendar} size="1x" /></InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        <InputGroup className="mb-2">
                        <DatePicker
                                    dateFormat="yyyy-MM-dd"
                                    className="form-control datepicker-form"
                                    id="search-endDate"
                                    selected={new Date(this.state.end)}
                                    onChange={date => this.setState({ end: date })}
                                    placeholderText={this.state.end}
                                    minDate={new Date()}
                                />
                            <InputGroup.Append>
                                <InputGroup.Text><FontAwesomeIcon icon={faCalendarCheck} size="1x" /></InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        <hr/>
                        <Form.Check
                            type="radio"
                            label="Short trip (7-11 days)"
                            name="stayLengthRadioGroup"
                            id="shortTrip"
                            onClick={e => this.setState({ length: 9 })}
                        />
                        <Form.Check
                            type="radio"
                            label="Medium trip (12-16 days)"
                            name="stayLengthRadioGroup"
                            id="mediumTrip"
                            onClick={e => this.setState({ length: 14 })}
                        />
                        <Form.Check
                            type="radio"
                            label="Long trip (17-22 days)"
                            name="stayLengthRadioGroup"
                            id="longTrip"
                            onClick={e => this.setState({ length: 20 })}
                        />
                        <hr/>
                        {/* <Form.Group controlId="formBasicRange">
                            <Form.Label>Maximum Price</Form.Label>
                            <Form.Control type="range" value={this.state.price} max="10000" onChange={e => this.setState({ price: e.target.value })} />
                        </Form.Group>
                        <InputGroup className="mb-2">
                            <FormControl id="search-price" placeholder={this.state.price} value={this.state.price} onChange={e => this.setState({ price: e.target.value })}/>
                            <InputGroup.Append>
                                <InputGroup.Text><FontAwesomeIcon icon={faDollarSign} size="1x" /></InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup> */}


                        <Form.Check type="checkbox" label="Recommended" />
                        <Form.Check type="checkbox" label="Family" />
                        <Form.Check type="checkbox" label="History" />
                        <Form.Check type="checkbox" label="Attractions" />
                        <Form.Check type="checkbox" label="Luxury" />
                        <Form.Check type="checkbox" label="Romantic" />
                        <Button variant="secondary" onClick={this.saveStateToParamsAndSearchTrip.bind(this)}>Search</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}
const CaretDownIcon = () => {
    return <FontAwesomeIcon icon={faGlobe} size="1x" className="bootstrap-grey" style={{marginLeft: "3px", marginRight: "3px"}}/>;
};
const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props} >
        <CaretDownIcon />
      </components.DropdownIndicator>
    );
  };
const mapStateToProps = (state) => {
    return {
        trips: state.trip.trips,
        searchOptions: state.trip.searchOptions
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveTripsToState: (trips) => dispatch(saveTripsToState(trips)),
        saveSearchoptions: (tripLengthState, departureState, startDate, endDate) => dispatch(saveSearchoptions(tripLengthState, departureState, startDate, endDate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)