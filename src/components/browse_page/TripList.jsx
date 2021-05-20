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
            case false:
                return null
            
            case 'dateSoonerToLater':
                sortedTrips = props.trips.sort((tripA, tripB) => {
                    const dateA = new Date(tripA.startDate).getTime();
                    const dateB = new Date(tripB.startDate).getTime();
                    return dateA - dateB
                });

                return state.tripList !== sortedTrips ?  { tripList: sortedTrips } : null

            case 'dateLaterToSooner':
                sortedTrips = props.trips.sort((tripA, tripB) => {
                    const dateA = new Date(tripA.startDate).getTime();
                    const dateB = new Date(tripB.startDate).getTime();
                    return dateB - dateA
                });

                return state.tripList !== sortedTrips ?  { tripList: sortedTrips } : null

            case 'priceLowToHigh':
                sortedTrips = props.trips.sort((tripA, tripB) => {
                    return tripA.price - tripB.price
                });

                return state.tripList !== sortedTrips ?  { tripList: sortedTrips } : null

            case 'priceHighToLow':
                sortedTrips = props.trips.sort((tripA, tripB) => {
                    return tripB.price - tripA.price
                })

                return state.tripList !== sortedTrips ?  { tripList: sortedTrips } : null

            case 'numberOfCitiesHighToLow':
                sortedTrips = props.trips.sort((tripA, tripB) => {
                    return tripB.locations.length - tripA.locations.length
                });

                return state.tripList !== sortedTrips ?  { tripList: sortedTrips } : null

            case 'numberOfCitiesLowToHigh':
                sortedTrips = props.trips.sort((tripA, tripB) => {
                    return tripA.locations.length - tripB.locations.length
                });

                return state.tripList !== sortedTrips ?  { tripList: sortedTrips } : null

            case 'stayLength':
                //takes 2 trips, gets the stay length for each and compares it to use sort
                sortedTrips = props.trips.sort((tripA, tripB) => {
                    const [tripALength, tripBLength] = [getTotalStayLengthExtracted(tripA), getTotalStayLengthExtracted(tripB)];
                    return tripALength - tripBLength
                });

                return state.tripList !== sortedTrips ?  { tripList: sortedTrips } : null
    
            default:
                return null
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