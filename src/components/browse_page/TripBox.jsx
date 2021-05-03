import React, { Component } from 'react'
import { Container, Row, Col, Image, Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute, faChevronRight, faCalendar, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { getPictureUrl } from '../../helpers/imageHelper'
import { toPriceDecimal } from '../../helpers/currencyHelper'

export default class TripBox extends Component {
    constructor(props) {
        super(props);
        this.trip = props.trip;
    }
    renderDestinations = () => {
        return this.trip.locations.map((loc, index) => {
            if(index && index !== this.trip.locations.length-1) {
                    return (
                    <span key={loc.locationId} className="inline-block"><FontAwesomeIcon icon={faChevronRight} size="xs" />{ ' ' }{loc.destination}<br/></span>
                )
            } else if (!index && index !== this.trip.locations.length-1){
                return loc.destination + ' '
            }
        });
    }

    renderTags = () => {
        if(this.trip.tags !== undefined && this.trip.tags !== null && this.trip.tags.length > 0) {
            this.trip.tags.sort( () => .5 - Math.random() ) //Shuffle the array
            return this.trip.tags.map((tag, index) => {
                return <Badge pill variant="secondary" key={index}>{tag}</Badge>
            }) 
        }
    }
    getTotalStayLength = () => {
        return (
            this.trip.locations.reduce((sum, b) => sum + b.stayLength, 0)
        )
    }
    getAmountOfCities = () => {
        return (
            this.trip.locations.length-1
        )
    }
    render() {
        return (
            <Container className="trip-container">
                <Row>
                    <Col className="trip-section-img"><Image src={getPictureUrl(this.trip.locations[0].picture, 'sm')} key={this.trip.id} /></Col>
                    <Col className="trip-section-info">
                        <h4>{this.getTotalStayLength()} Days | {this.getAmountOfCities()} Cities</h4>
                        <span>DESTINATIONS</span><br />
                        <span style={{fontSize: 14}} ><FontAwesomeIcon icon={faRoute} /> {this.renderDestinations()}</span>
                        <div style={{marginTop: 20}}>
                            {this.renderTags()}
                        </div>
                    </Col>
                    <Col className="trip-section-buy">
                        <Container>
                            <FontAwesomeIcon icon={faCalendar} size="xs" /> {this.trip.startDate}- {this.trip.endDate}<br />
                            <FontAwesomeIcon icon={faUserFriends} size="xs" /> 2 People<br />
                        </Container>
                        <Container>
                            <Container className="price-container">
                                <h3 className="bold price-tag">{toPriceDecimal(this.trip.price)} {this.trip.trip_currency_code}</h3>
                                <span>/Person</span>
                            </Container>
                            <Button variant="success">View trip</Button>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}