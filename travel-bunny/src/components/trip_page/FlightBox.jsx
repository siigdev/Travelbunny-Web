import React, { Component } from 'react'
import { Container, Card, Row, Col, Image, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faLuggageCart, faSuitcaseRolling, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import image from '../../assets/images/testimage.png'
import ryanair from '../../assets/images/ryanair.jpg'

export default class FlightBox extends Component {
    constructor(props) {
        super(props);
        this.flight = props.flight;
    }

    getPictureUrl(size) {
        let url = '';
        if (size == 'sm') {
            url = `${this.trip.locations[0].picture}188160.png`
        }
        else if (size == 'lg') {
            url = `${this.trip.locations[0].picture}375160.png`
        }
        return url
    }
    render() {
        return (

            <Container className="flight-box">
                <Row>
                    <Col className="flight-section-img"><Image src={image} /></Col>
                    <Col className="flight-section-info">
                        <Row>
                            <Col><Badge pill variant="primary">
                                1 way
                        </Badge></Col>
                            <Col><Image src={ryanair} className="flight-company-icon" /> 
                                <span>{this.flight.carrier} - FR7408</span></Col>
                            <Col><span>{this.flight.departure_time}</span></Col>
                        </Row>
                        <Row className="center-row">
                            <Col className="no-flex-grow">
                                <h2>05:16</h2>
                                {this.flight.origin}
                                </Col>
                            <Col><FontAwesomeIcon icon={faPlane} size="2x" /></Col>
                            <Col>
                                <h2>19:00</h2>
                                {this.flight.destination}
                            </Col>
                        </Row>
                        <Row className="center-row luggage-info">
                            <Col><FontAwesomeIcon icon={faLuggageCart} size="lg" /><span>1 x</span></Col>
                            <Col><FontAwesomeIcon icon={faBriefcase} size="lg" /><span>1 x</span></Col>
                            <Col><FontAwesomeIcon icon={faSuitcaseRolling} size="lg" /><span>1 x</span></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}