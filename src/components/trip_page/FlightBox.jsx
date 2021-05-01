import React, { Component } from 'react'
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faLuggageCart, faSuitcaseRolling, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import ryanair from '../../assets/images/ryanair.jpg'
import { getPictureUrl } from '../../helpers/imageHelper'
import * as timeHelper from '../../helpers/timeHelper'

export default class FlightBox extends Component {
    constructor(props) {
        super(props);
        this.flight = props.flight;
        console.log("test1")
        this.location = props.location;

        //Remove this code when location is also sent for the initial location
        if (this.location == undefined) {
            console.log("test")
            this.location = {}
            this.location.picture = "https://locationpictures.s3.eu-central-1.amazonaws.com/Pictures/0920020715/"
        }
    }
    render() {
        return (

            <Container className="flight-box">
                <Row>
                    <Col className="flight-section-img"><Image src={getPictureUrl(this.location.picture, 'sm')} /></Col>
                    <Col className="flight-section-info">
                        <Row>
                            <Col><Badge pill variant="primary">
                                1 way
                        </Badge></Col>
                        <Col style={{textAlign: 'center'}}>{timeHelper.convertDateTimeToDDMMYYYY(this.flight.departure_time)}</Col>
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