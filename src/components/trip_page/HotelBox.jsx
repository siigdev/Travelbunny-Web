import React, { Component } from 'react'
import { Container, Row, Col, Image, Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import image from '../../assets/images/testimage.png'

export default class HotelBox extends Component {
    constructor(props) {
        super(props);
        this.hotel = props.hotel;
        this.state = {
            hotel: this.hotel
        }
        console.log(props)
    }

    renderStars(count) {
        console.log(count)
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
                    <Col className="flight-section-img"><Image src={image} /></Col>
                    <Col className="flight-section-info">
                        <Row>
                            <h5>{this.state.hotel.hotel_info[0].hotel_data.name} </h5> <Badge pill variant="primary">
                                8.9
                        </Badge>
                        </Row>
                        <Row>
                            <span>{this.state.hotel.hotel_info[0].hotel_data.address}, {this.state.hotel.hotel_info[0].hotel_data.city} </span>
                        </Row>
                    </Col>
                    <Col className="trip-section-buy">
                        <Col style={{ textAlign: 'right' }}>
                            {this.renderStars(this.state.hotel.hotel_info[0].hotel_data.class)}
                        </Col>
                        <Container className="price-container">
                            <h4 className="bold price-tag">{this.state.hotel.price} {this.state.hotel.hotel_currency_code}</h4>
                            <span>/Night</span>
                        </Container>
                        <Button variant="dark">More details</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}