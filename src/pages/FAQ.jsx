import React, { Component } from 'react'
import { Container, Accordion, Button } from 'react-bootstrap';

export default class FAQ extends Component {

    render() {
        return (
            <Container>
                <h1>Frequently Asked Questions</h1>
                <Accordion>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Why should I use Trype?
                </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <div>
                        Trype engine accesses thousands of flights and hotels in real time, comparing prices, locations, and schedules to build the best possible trip for you.
                        Like in a chess game, our engine will calculate each move carefully and calculate how you can see more, better, and cheaper.
                        All the itinerary will be presented in the shape of different packages, where you will be able to see the costs of flights and accommodations. We will help you in the booking process, making sure it’s as easy to reserve your trip as boarding the plane!
                        </div>
                    </Accordion.Collapse>
                    <br/>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        What is the cost for using Trype?
                </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <div>
                        Trype does not charge you any fee. Our service is provided free of charge and to no extra cost to the user.
                        Where can I find my itinerary once my trip is booked?
                        Upon booking we will provide you the full itinerary, which will also be emailed to you.
                        </div>
                    </Accordion.Collapse>
                </Accordion>
                <br/>
            </Container>
        )
    }
}


