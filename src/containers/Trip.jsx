import React, { Component } from 'react'
import Loading from '../components/global/Loading'
import Map from '../components/trip_page/Map'
import FlightBox from '../components/trip_page/FlightBox'
import HotelBox from '../components/trip_page/HotelBox'
import { Container, Alert } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture, faHotel, faGlobe, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default class Trip extends Component {
    constructor(props) {
        super(props);
        this.match = props.match;
        if (props.location.res !== undefined)
            this.propsDefined = true
        this.state = {
            loading: true,
            active: 'flights',
            hotels: this.props.location.res.Hotels
        }
        this.handleFlights = this.handleFlights.bind(this, true);
        this.handleHotels = this.handleHotels.bind(this, false);
    }
    componentDidMount() {
        fetch(`https://657vlr7156.execute-api.eu-central-1.amazonaws.com/Prod/?tripID=${this.match.params.id}`)
            .then(response => response.json())
            .then(response => {
                this.setState({ loading: false, flights: response.tripDetails.flights })
            })
            .catch((error) => {
                this.setState({ loading: false })
                console.warn(error)
            });
    }
    getCoordinates() {
        let cords = [];
        if (this.propsDefined) {
            this.props.location.res.locations.forEach((loc) =>
                cords.push({ lat: loc.coordinates[0], lng: loc.coordinates[1] })
            );
        }
        return cords;
    }
    renderFlights() {
        if (this.state.flights === undefined) {
            return (
                <Alert variant='danger'>
                    Error! We could not find any flights matching your search criteria. Please try again.
                </Alert>
            )
        }
        else
            return (
                this.state.flights.map((flight) => {
                    return (
                        <FlightBox key={flight.id} flight={flight} />
                    );
                })
            )
    }

    renderHotels() {
        if (this.state.hotels === undefined) {
            return (
                <Alert variant='danger'>
                    Error! We could not find any hotels matching your search criteria. Please try again.
                </Alert>
            )
        }
        else
            return (
                 this.state.hotels.map((hotel) => {
                     return (
                         <HotelBox key={hotel.hotels[0].hotel_id} hotel={hotel.hotels[0]}/>
                     )
                 })
            )
    }

    handleFlights() {
        this.setState({active: 'flights'})
    }

    handleHotels() {
        this.setState({active: 'hotels'})
    }
    
    render() {
        if (this.state.loading) {
            return (
                <Loading />
            )
        }
        return (
            <Container className="trip-page-container">
                <Container className="trip-description-container">
                    <Container className="sort-box">
                        <a href="javascript:void(0);" className={this.state.active === 'flights' ? 'active-link' : null} onClick={this.handleFlights}><FontAwesomeIcon icon={faPlaneDeparture} size="1x" /> Flights</a>
                        <a href="javascript:void(0);" className={this.state.active === 'hotels' ? 'active-link' : null} onClick={this.handleHotels}><FontAwesomeIcon icon={faHotel} size="1x" /> Hotels</a>
                        <a href="javascript:void(0);"><FontAwesomeIcon icon={faGlobe} size="1x" /> Attractions</a>
                        <a href="javascript:void(0);"><FontAwesomeIcon icon={faInfoCircle} size="1x" /> Information</a>
                    </Container>
                    {this.state.active === 'flights' ?
                        <Container className="flight-container">
                            {this.renderFlights()}
                        </Container>
                        :
                        <Container className="flight-container">
                            {this.renderHotels()}
                        </Container>
                    }
                </Container>
                <Container className="map-container">
                    <Map cords={this.getCoordinates()} />
                </Container>
            </Container>
        )
    }
}


