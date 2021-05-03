import React, { Component } from 'react'
import Loading from '../components/global/Loading'
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { toPriceDecimal } from '.././helpers/currencyHelper'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlane, faHotel, faMap } from "@fortawesome/free-solid-svg-icons";

class Purchase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    renderHotels() {
        if(this.props.trip != null && this.props.trip.hotels !== undefined && this.props.trip.hotels !== null && this.props.trip.hotels.length > 0) {
            return (
                this.props.trip.hotels.map((hotel) => {
                    return (
                        <p key={hotel.locationId}>{hotel.affiliate_url}</p>
                    );
                })
            )
        } else {
            return (
                <p>No hotels found</p>
            )
        }
    }
    renderFlights() {
        if(this.props.trip != null && this.props.trip.flights !== undefined && this.props.trip.flights !== null && this.props.trip.flights.length > 0) {
            return (
                this.props.trip.flights.map((flight) => {
                    return (
                        <p key={flight.id}>{flight.url}</p>
                    );
                })
            )
        } else {
            return (
                <p>No flights found</p>
            )
        }
    }
    getFlightsPrice() {
        return this.props.trip.flights.reduce((a, b) => a + b.ticketDetails.price, 0)
    }
    getHotelsPrice() {
        return this.props.trip.hotels.reduce((a, b) => a + b.price, 0)
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
                            <Button variant="link"><FontAwesomeIcon icon={faList} size="1x" /> Overview</Button>
                            <Button variant="link"><FontAwesomeIcon icon={faPlane} size="1x" /> Flights</Button>
                            <Button variant="link"><FontAwesomeIcon icon={faHotel} size="1x" /> Hotels</Button>
                            <Button variant="link"><FontAwesomeIcon icon={faMap} size="1x" /> Attractions</Button>
                        </Container>
                        <Container className="purchase-content">
                            <h1>Hotels</h1>
                            {this.renderHotels()}
                            <h1>Flights</h1>
                            {this.renderFlights()}
                        </Container>
                    </Col>

                    <Col className="search-settings">
                        <div className="space-between">
                            <span>Flights</span><span>{toPriceDecimal(this.getFlightsPrice())}</span>
                        </div>
                        <div className="space-between">
                            <span>Hotels</span><span>{toPriceDecimal(this.getHotelsPrice())}</span>
                        </div>

                        <hr/>
                        <div className="space-between">
                            <span>Taxes</span><span>1045</span>
                        </div>
                        <div className="space-between">
                            <span>Transaction Fee</span><span>1045</span>
                        </div>
                        <hr></hr>
                        Price for 2 People
                        <h3>{toPriceDecimal(this.props.trip.price)} {this.props.trip.trip_currency_code}</h3>
                        <Button variant="success">Purchase trip</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        trip: state.trip.trip
    }
}
export default connect(mapStateToProps)(Purchase);