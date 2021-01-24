const initState = {
    acceptReserveTripModal: false
}

const modalsReducer = (state = initState, action) => {
    switch(action.type) {
        case 'OPEN_ACCEPT_RESERVE_TRIP_MODAL':
            return {
                ...state,
                acceptReserveTripModal: true
            };
        case 'CLOSE_ACCEPT_RESERVE_TRIP_MODAL':
            return {
                ...state,
                acceptReserveTripModal: false
            };
        case 'OPEN_RESERVE_TIMED_OUT_MODAL':
            return {
                ...state, 
                reserveTimedOutModal: true
            }
        case 'CLOSE_RESERVE_TIMED_OUT_MODAL':
            return {
                ...state, 
                reserveTimedOutModal: false
            }
        default:
            return state
    }
}

export default modalsReducer;