import React, { Component } from 'react';
// eslint-disable-next-line
import { Card, Container, Image } from 'react-bootstrap';
import Slider from 'react-slick';
import '../../styles/slick/slick-theme.scss';
import '../../styles/slick/slick.scss';

import one from '../../assets/images/destination_images/1.png';
import two from '../../assets/images/destination_images/2.png';
import three from '../../assets/images/destination_images/3.png';
import four from '../../assets/images/destination_images/4.png';
import five from '../../assets/images/destination_images/5.png';


export default class PopularDestinations extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };

        return (
            <Container className="popular-destinations">
                <h1>Popular destinations</h1>
                <Slider {...settings} className="popular-destinations-slider">
                    <Card>
                        <Card.Img variant="top" src={one} />
                        <Card.Body>
                            <Card.Title>Pathos</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={two} />
                        <Card.Body>
                            <Card.Title>Istambul</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={three} />
                        <Card.Body>
                            <Card.Title>Rijeka</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={four} />
                        <Card.Body>
                            <Card.Title>Lviv</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={five} />
                        <Card.Body>
                            <Card.Title>Rome</Card.Title>
                        </Card.Body>
                    </Card>
                </Slider>
            </Container>
        );
    }
}
