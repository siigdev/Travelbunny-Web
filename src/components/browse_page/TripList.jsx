import React, { Component } from 'react';
import TripBox from './TripBox';
import { Alert } from 'react-bootstrap';

class TripList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tripList: props.trips
        }
    }

    static getDerivedStateFromProps(props, state) {
        let sortedTrips;

        switch(props.sortBy) {
            case 'date':
                //takes 2 trips, gets the stay length for each and compares it to use sort
                sortedTrips = props.trips.sort((tripA, tripB) => {
                    const [tripALength, tripBLength] = [getTotalStayLengthExtracted(tripA), getTotalStayLengthExtracted(tripB)];
                    return tripALength - tripBLength;
                });

                if (state.tripList !== sortedTrips) {
                    this.setState({ tripList: sortedTrips });
                }

                break;
            
            case 'priceLowToHigh':
                sortedTrips = props.trips.sort((tripA, tripB) => {
                    return tripA.price - tripB.price;
                });

                if (state.tripList !== sortedTrips) {
                    this.setState({ tripList: sortedTrips });
                }

                break;

            case 'priceHighToLow':
                sortedTrips = props.trips.sort((tripA, tripB) => {
                    return tripB.price - tripA.price;
                })

                if (state.tripList !== sortedTrips) {
                    this.setState({ tripList: sortedTrips });
                }

                break;

            case 'numberOfCitiesHighToLow':
                sortedTrips = props.trips.sort((tripA, tripB) => {
                    return tripB.locations.length - tripA.locations.length;
                });

                if (state.tripList !== sortedTrips) {
                    this.setState({ tripList: sortedTrips });
                }

                break;
            case 'numberOfCitiesLowToHigh':
                sortedTrips = props.trips.sort((tripA, tripB) => {
                    return tripA.locations.length - tripB.locations.length;
                });

                if (state.tripList !== sortedTrips) {
                    this.setState({ tripList: sortedTrips })
                }

                break;
    
            default:
                break;
        }
    }

    getTotalStayLength = (trip) => {
        return (
            trip.locations.reduce((sum, b) => sum + b.stayLength, 0)
        )
    }

    viewTrip(trip) {
        this.props.history.push({
            pathname: '/Trip/' + trip.id,
            res: trip,
        })
    }

    renderTrips() {
        return this.state.tripList.map((trip) => {
            return (
                <div onClick={() => {this.viewTrip(trip)}} key={trip.id}>
                    <TripBox trip={trip}/>
                </div>
            )
        })
    }

    render() {
            if (!this.props.trips) {
                return (
                    <Alert variant='danger'>
                        Error! We could not find any travel packages matching your search parameters. Please <a href="javascript:window.location.reload(true)">try again</a>.
                    </Alert>
                )
            }
            return (
                <div>
                    {this.renderTrips()}
                </div>
            )
    }
}

const getTotalStayLengthExtracted = (trip) => {
    return (
        trip.locations.reduce((sum, b) => sum + b.stayLength, 0)
    )
}

export default TripList;