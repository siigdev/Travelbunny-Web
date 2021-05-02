import React, { Component} from 'react'
import '../LoadingTripGeneration/LoadingTripGeneration.scss';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';


export default class LoadingTripGeneration extends Component {
    constructor(props) {
        super(props);
      }
      render() {
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          fade: true
        };
        return (
            <Container className="loading-trip-generation-container">
            <Slider ref={slider => (this.slider = slider)} {...settings}>
              <div>
                  <img src="https://locationpictures.s3.eu-central-1.amazonaws.com/Pictures/0920020715/188160.png"/>
                <h4>Analyzing cities...</h4>
              </div>
              <div>
                  <img src="https://locationpictures.s3.eu-central-1.amazonaws.com/Pictures/0920032001/188160.png"/>
                <h4>Discovering flights...</h4>
              </div>
              <div>
                  <img src="https://locationpictures.s3.eu-central-1.amazonaws.com/Pictures/0920181513/188160.png"/>
                <h4>Combining packages...</h4   >
              </div>
            </Slider>
          </Container>
        );
      }
    }