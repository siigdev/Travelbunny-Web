import React, { Component } from 'react'
import Loading from '../components/global/Loading'
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faSortAmountUp, faSortAmountDown, faSortNumericUp } from "@fortawesome/free-solid-svg-icons";

class Purchase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
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
                            <Button variant="link"><FontAwesomeIcon icon={faCalendar} size="1x" /> Date</Button>
                            <Button variant="link"><FontAwesomeIcon icon={faSortAmountUp} size="1x" /> Price Low to High</Button>
                            <Button variant="link"><FontAwesomeIcon icon={faSortAmountDown} size="1x" /> Price High to Low</Button>
                            <Button variant="link"><FontAwesomeIcon icon={faSortNumericUp} size="1x" /> Number of Cities</Button>
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
                        <h3>{this.props.trip.price} DKK</h3>
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