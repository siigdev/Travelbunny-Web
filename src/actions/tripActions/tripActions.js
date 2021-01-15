import * as service from '../../services/tripService';

export const reserveTrip = (tripObj) => {
    return (dispatch, getState) => {
        
        try{
            service.reserveTrip(
                tripObj
            ).then((response) => {
                if(response) {
                    dispatch({type: "TRIP_RESERVED_SUCCESS", trip: response})

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
            cancelReserveTrip();
        } else {
            dispatch({
            type: 'TIMER_TICK'
            });
        }
    }, 1000);
}

export const cancelReserveTrip = () => {
    console.log("cancelled")
    return (dispatch) => {
        dispatch({type: "TRIP_RESERVED_CANCEL"})
    }
}