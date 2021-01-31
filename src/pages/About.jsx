import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

export default class About extends Component {

    render() {
        return (
            <Container>
                <h1>About</h1>
                <p>Founded in 2019 in Odense, in the island of Fyn, Nordico is a young Danish startup. We believe that “to travel is to live", and thus our mission is to bring people together with the best travel plans.</p>

                <p>Powered by Artificial Intelligence, Nordico's engine accesses big databases of flights and hotels and puzzles together memorable trips at the best price.</p>

                <p>Our policy is transparency and price competitiveness: Our platform is free to use and we don´t charge you commissions on our packages. We aim to always provide you with clear information and find for you the best discounts and travel opportunities.</p>
            </Container>
        )
    }
}


