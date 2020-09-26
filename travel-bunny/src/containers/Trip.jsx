import React, { Component } from 'react'
import Loading from '../components/global/Loading'
import Map from '../components/trip_page/Map'
import FlightBox from '../components/trip_page/FlightBox'
import { Container, Row, Col, Image, Alert } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture, faHotel, faGlobe, faSortNumericUp, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default class Trip extends Component {
    constructor(props) {
        super(props);
        if (props.location.res !== undefined)
            this.tripId = props.location.res.id
        this.state = {
            loading: true,
            tripId: this.tripId
        }
    }
    componentDidMount() {
        fetch("https://657vlr7156.execute-api.eu-central-1.amazonaws.com/Prod/?tripID=" + this.state.tripId)
          .then(response => response.json())
          .then(response => {
            this.setState({loading: false, flights: response.tripDetails.flights})
          })
          .catch((error) => {
            this.setState({loading: false})
            console.warn(error)
          });
    }
    getCoordinates() {
        let cords = [];
        this.props.location.res.locations.map((loc) => {
            cords.push({lat: loc.coordinates[0], lng: loc.coordinates[1]})
        })
        return cords;
    }
    renderFlights() {
        if(this.state.flights === undefined) {
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
                        <FlightBox key={flight.id} flight={flight}/>
                    );
                })
            )
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
                        <a href="#" className="active-link"><FontAwesomeIcon icon={faPlaneDeparture} size="1x" /> Flights</a>
                        <a href="#"><FontAwesomeIcon icon={faHotel} size="1x" /> Hotels</a>
                        <a href="#"><FontAwesomeIcon icon={faGlobe} size="1x" /> Attractions</a>
                        <a href="#"><FontAwesomeIcon icon={faInfoCircle} size="1x" /> Information</a>
                    </Container>
                    <Container className="flight-container">
                        {this.renderFlights()}
                    </Container>
                </Container>
                <Container className="map-container">
                    <Map cords={this.getCoordinates()}/>
                </Container>
            </Container>
        )
    }
}


