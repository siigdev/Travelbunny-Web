import React, { Component } from 'react'
import Loading from '../components/global/Loading'
import Map from '../components/trip_page/Map'
import { Container } from 'react-bootstrap';


export default class Trip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }
    componentDidMount() {
    }   

    render() {
        if (this.state.loading) {
            return (
                <Loading />
            )
        }
        return (
            <Container className="browse-container">
                <h1>Test</h1>
                <Map/>
            </Container>
        )
    }
}


