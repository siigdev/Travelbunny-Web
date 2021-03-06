import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, Image, Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute, faChevronRight, faCalendar, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { openAcceptReserveTripModal } from '../../actions/modalActions/modalActions'
import { saveTripToState } from '../../actions/tripActions/tripActions'
import { getPictureUrl } from '../../helpers/imageHelper'

class TripBox extends Component {
    constructor(props) {
        super(props);
        this.trip = props.trip;
    }
    renderDestinations = () => {
        return this.trip.locations.map((loc, index) => {
            if (index)
                return (
                <span key={loc.locationId} className="inline-block"><FontAwesomeIcon icon={faChevronRight} size="xs" />{ ' ' }{loc.destination}</span>
            )
            else {
                return loc.destination + ' '
            }
        });
    }

    getTotalStayLength = () => {
        return (
            this.trip.locations.reduce((sum, b) => sum + b.stayLength, 0)
        )
    }
    getAmountOfCities = () => {
        return (
            this.trip.locations.length
        )
    }
    handleReserve = (e) => {
        this.props.saveTripToState(this.trip)
        this.props.openAcceptReserveTripModal(this.trip)
    }
    render() {
        return (
            <Container className="trip-container">
                <Row>
                    <Col className="trip-section-img"><Image src={getPictureUrl(this.trip.locations[0].picture, 'sm')} key={this.trip.id} /></Col>
                    <Col className="trip-section-info">
                        <h4>{this.getTotalStayLength()} Days | {this.getAmountOfCities()} Cities</h4>
                        <span>DESTINATIONS</span><br />
                        <span style={{fontSize: 11}}><FontAwesomeIcon icon={faRoute} /> {this.renderDestinations()}</span>
                        <div>
                            <Badge pill variant="secondary">
                                Family
                            </Badge>
                            <Badge pill variant="secondary">
                                Attraction
                            </Badge>
                            <Badge pill variant="secondary">
                                History
                        </Badge>
                        </div>
                    </Col>
                    <Col className="trip-section-buy">
                        <Container>
                            <FontAwesomeIcon icon={faCalendar} size="xs" /> {this.trip.startDate}- {this.trip.endDate}<br />
                            <FontAwesomeIcon icon={faUserFriends} size="xs" /> 2 People<br />
                        </Container>
                        <Container>
                            <Container className="price-container">
                                <h3 className="bold price-tag">{this.trip.price} DKK</h3>
                                <span>/Person</span>
                            </Container>
                            <Button variant="success" onClick={this.handleReserve}>View trip</Button>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveTripToState: (trip) => dispatch(saveTripToState(trip)),
        openAcceptReserveTripModal: (trip) => dispatch(openAcceptReserveTripModal(trip))
    }
}
export default connect(null, mapDispatchToProps)(TripBox)