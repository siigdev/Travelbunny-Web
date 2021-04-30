import React, { Component } from 'react'
import { Container, Row, Col, Image, Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { toPriceDecimal } from '../../helpers/currencyHelper'

export default class HotelBox extends Component {
    constructor(props) {
        super(props);
        this.hotel = props.hotel;
        this.state = {
            hotel: this.hotel
        }
    }

    renderStars(count) {
        let stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<FontAwesomeIcon icon={faStar} key={i} size="lg" style={{ color: '#ebc334' }} />)
        }
        return stars;
    }
    render() {
        return (
            <Container className="flight-box">
                <Row>
                    <Col className="flight-section-img" style={{minHeight:300, minWidth: 300, maxHeight: 300, maxWidth: 300}}><Image src={this.state.hotel.photo_url} height={300} width={300} style={{minHeight:300, minWidth: 300, maxHeight: 300, maxWidth: 300}}/></Col>
                    <Col className="flight-section-info">
                        <Row>
                            <h5>{this.state.hotel.name} </h5> <Badge pill variant="primary">
                                8.9
                        </Badge>
                        </Row>
                        <Row>
                            <span>{this.state.hotel.street_address}, {this.state.hotel.city} </span>
                        </Row>
                    </Col>
                    <Col className="trip-section-buy">
                        <Col style={{ textAlign: 'right' }}>
                            {this.renderStars(this.state.hotel.hotel_rating)}
                        </Col>
                        <Container className="price-container">
                            <h4 className="bold price-tag">{toPriceDecimal(this.state.hotel.price_total/this.state.hotel.nights_at)} {this.state.hotel.currency_code}</h4>
                            <span>/Nights</span>
                        </Container>
                        <Button variant="dark">More details</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}