import React, { Component } from 'react'
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faLuggageCart, faSuitcaseRolling, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import image from '../../assets/images/testimage.png'
import ryanair from '../../assets/images/ryanair.jpg'
import * as timeHelper from '../../helpers/timeHelper'

export default class FlightBox extends Component {
    constructor(props) {
        super(props);
        this.flight = props.flight;
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
                            <Col style={{textAlign: 'right'}}><Image src={ryanair} className="flight-company-icon" /> 
                                <span>{this.flight.carrier}</span></Col>
                        </Row>
                        <Row className="center-row">
                            <Col className="no-flex-grow">
                                <h2>{timeHelper.convertDateTimeToHHMM(this.flight.departure_time)}</h2>
                                {this.flight.origin}
                                </Col>
                            <Col style={{marginRight: 10, marginLeft: 10}}><FontAwesomeIcon icon={faPlane} size="2x" /></Col>
                            <Col>
                                <h2>{timeHelper.convertDateTimeToHHMM(this.flight.arrival_time)}</h2>
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