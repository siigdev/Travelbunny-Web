export const openAcceptReserveTripModal = (tripObj) => {
    return (dispatch) => {
        dispatch({type: "SAVE_TRIP_TO_STATE", trip: tripObj})
        dispatch({type: "OPEN_ACCEPT_RESERVE_TRIP_MODAL"})
    }
}
export const closeAcceptReserveTripModal = () => {
    return (dispatch) => {
        dispatch({type: "CLOSE_ACCEPT_RESERVE_TRIP_MODAL"})
    }
}