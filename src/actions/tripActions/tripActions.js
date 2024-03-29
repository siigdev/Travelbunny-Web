import * as service from '../../services/tripService';

export const saveTripToState = (tripObj) => {
    return (dispatch) => {
        try{
            service.saveTripToState(
                tripObj
            ).then((response) => {
                if(response) {
                    dispatch({type: "SAVE_TRIP_TO_STATE", trip: response})    
                }
                else
                    dispatch({type: "TRIP_SAVE_TO_STATE_ERROR"})
            }).catch((error) => {
                dispatch({type: "TRIP_SAVE_TO_STATE_ERROR", error})
            })
        } catch(error) {
            dispatch({type: "TRIP_SAVE_TO_STATE_ERROR", error})
        }
    }
}
export const saveSearchoptions = (tripLengthState, departureState, startDate, endDate) => {
    return (dispatch) => {
        try{
            service.saveSearchOptions(
                tripLengthState, departureState, startDate, endDate
            ).then((response) => {
                if(response) {
                    dispatch({type: "SAVE_SEARCH_OPTIONS", search: response})    
                }
                else
                    dispatch({type: "TRIP_SEARCH_OPTIONS_ERROR"})
            }).catch((error) => {
                dispatch({type: "TRIP_SEARCH_OPTIONS_ERROR", error})
            })
        } catch(error) {
            dispatch({type: "TRIP_SEARCH_OPTIONS_ERROR", error})
        }
    }
}
export const saveTripsToState = (trips) => {
    return (dispatch) => {
        try{
            service.saveTripsToState(
                trips
            ).then((response) => {
                if(response) {
                    dispatch({type: "SAVE_TRIPS_TO_STATE", trips: response})    
                }
                else
                    dispatch({type: "TRIPS_SAVE_TO_STATE_ERROR"})
            }).catch((error) => {
                dispatch({type: "TRIPS_SAVE_TO_STATE_ERROR", error})
            })
        } catch(error) {
            dispatch({type: "TRIPS_SAVE_TO_STATE_ERROR", error})
        }
    }
}
export const reserveTrip = () => {
    return (dispatch, getState) => {
        let { trip } = getState();
        try{
            service.reserveTrip(
                trip
            ).then((response) => {
                if(response) {
                    dispatch({type: "TRIP_RESERVED_SUCCESS", trip: response.trip})

                    // Start the trip reserve counter with a dispatch timer
                    counterHandler(dispatch, getState);     
                }
                else
                    dispatch({type: "TRIP_RESERVED_ERROR"})
            }).catch((error) => {
                dispatch({type: "TRIP_RESERVED_ERROR", error})
            })
        } catch(error) {
            dispatch({type: "TRIP_RESERVED_ERROR", error})
        }
    }
}

const counterHandler = (dispatch, getState) => {
    const counterFunc = setInterval(() => {
        let { trip } = getState();
        if(trip.timer !== undefined && trip.timer.counter <= 0){
            clearInterval(counterFunc);
            dispatch({type: "TRIP_RESERVED_CANCEL"})
            dispatch({type: "OPEN_RESERVE_TIMED_OUT_MODAL"})
        } else {
            dispatch({type: 'TIMER_TICK'});
        }
    }, 1000);
}
