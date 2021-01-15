import * as service from '../../services/tripService';

export const reserveTrip = (trip) => {
    return (dispatch) => {
        try{
            service.reserveTrip(
                trip
            ).then((response) => {
                if(response) {
                    dispatch({type: "TRIP_RESERVED_SUCCESS", trip: response})
                    setInterval(() => {
                        dispatch({
                        type: 'TIMER_TICK'
                        });
                    }, 1000);
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