import React, { Component } from 'react'
import Loading from '../components/global/Loading'
import TripBox from '../components/browse_page/TripBox'
import { Container, Row, Col, Button, Form, InputGroup, FormControl, Alert } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faSortAmountUp, faSortAmountDown, faSortNumericUp, faSearch, faDollarSign, faGlobe } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line


export default class Browse extends Component {
    constructor(props) {
        super(props);
        this.match = props.match.params;
        this.state = {
            error: '',
            trips: [],
            loading: true,
            price: 975
        }
    }
    componentDidMount() {
        var params = new URLSearchParams({
            windowStart: this.match.start,
            windowEnd: this.match.end,
            initialLocation: this.match.location,
            stayLength: this.match.length,
            country: this.match.country,
            currency: 'DKK',
            locale: 'en-US'
        })
        fetch("https://183my5kbhd.execute-api.eu-central-1.amazonaws.com/Prod/?" + params)
            .then(response => response.json())
            .then(response => {
                this.setState({ loading: false, trips: response.trips })
            })
            .catch((error) => {
                this.setState({ loading: false, error: error })
            });
    }
    viewTrip(trip) {
        this.props.history.push({
            pathname: '/Trip/' + trip.id,
            res: trip,
        })
    }
    renderTrips() {
        if (!this.state.loading && (this.state.trips === undefined || !this.state.trips.length))
            return (
                <Alert variant='danger'>
                    Error! We could not find any travel packages matching your search parameters. Please try again.
                </Alert>
            )
        else return this.state.trips.map((trip) => {
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
                <Loading />
            )
        }
        return (
            <Container className="browse-container">

                <Row>
                    <Col>
                        <Container className="sort-box">
                            <a href="/"><FontAwesomeIcon icon={faCalendar} size="1x" /> Date</a>
                            <a href="/"><FontAwesomeIcon icon={faSortAmountUp} size="1x" /> Price Low to High</a>
                            <a href="/"><FontAwesomeIcon icon={faSortAmountDown} size="1x" /> Price High to Low</a>
                            <a href="/"><FontAwesomeIcon icon={faSortNumericUp} size="1x" /> Number of Cities</a>
                        </Container>
                        {this.renderTrips()}
                    </Col>

                    <Col className="search-settings">
                        <InputGroup className="mb-2">
                            <FormControl id="search-trip-id" placeholder="Trip ID" />
                            <InputGroup.Append>
                                <InputGroup.Text><FontAwesomeIcon icon={faSearch} size="1x" /></InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <FormControl id="search-destination" placeholder="Destination" />
                            <InputGroup.Append>
                                <InputGroup.Text><FontAwesomeIcon icon={faGlobe} size="1x" /></InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <FormControl id="search-date" placeholder="Date" />
                            <InputGroup.Append>
                                <InputGroup.Text><FontAwesomeIcon icon={faCalendar} size="1x" /></InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>

                        <Form.Group controlId="formBasicRange">
                            <Form.Label>Maximum Price</Form.Label>
                            <Form.Control type="range" defaultValue={this.state.price} max="10000" onChange={e => this.setState({ price: e.target.value })} />
                        </Form.Group>
                        <InputGroup className="mb-2">
                            <FormControl id="search-price" placeholder={this.state.price} />
                            <InputGroup.Append>
                                <InputGroup.Text><FontAwesomeIcon icon={faDollarSign} size="1x" /></InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>


                        <Form.Check type="checkbox" label="Recommended" />
                        <Form.Check type="checkbox" label="Family" />
                        <Form.Check type="checkbox" label="History" />
                        <Form.Check type="checkbox" label="Attractions" />
                        <Form.Check type="checkbox" label="Luxury" />
                        <Form.Check type="checkbox" label="Romantic" />
                        <Button variant="secondary">Apply settings</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}


