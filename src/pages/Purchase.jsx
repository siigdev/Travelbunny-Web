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
        return (
            this.props.trip.hotels.map((hotel) => {
                return (
                    <p key={hotel.locationId}>{hotel.affiliate_url}</p>
                );
            })
        )
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
                            {this.renderHotels()}
                        </Container>
                    </Col>

                    <Col className="search-settings">
                        <div class="space-between">
                            <span>Flights</span><span>199</span>
                        </div>
                        <div class="space-between">
                            <span>Hotels</span><span>524</span>
                        </div>

                        <hr/>
                        <div class="space-between">
                            <span>Taxes</span><span>1045</span>
                        </div>
                        <div class="space-between">
                            <span>Transaction Fee</span><span>1045</span>
                        </div>
                        <hr></hr>
                        Price for 2 People
                        <h3>{toPriceDecimal(this.props.trip.price)} DKK</h3>
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