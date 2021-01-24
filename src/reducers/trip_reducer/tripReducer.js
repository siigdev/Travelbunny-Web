const initState = {
    tripErr: null,
    trip: null,
    timer: {
        reservedTime: null,
        started: false,
        counter: 60*30
    }
}

const tripReducer = (state = initState, action) => {
    switch(action.type) {
        case 'TRIP_RESERVED_SUCCESS':
            return {
                ...state,
                tripErr: action.error,
                timer: {...state.timer, started: true, reservedTime: Date.now(), counter: 60*30}
            };
        case 'TRIP_RESERVED_ERROR':
            return {
                ...state,
                tripErr: action.error
            };
        case 'TRIP_RESERVED_CANCEL':
            return {
                ...state,
                tripErr: action.error,
                timer: {...state.timer, started: false, reservedTime: null, counter: 0}
            };
        case 'TIMER_TICK':
            return {
                ...state,
                timer: {...state.timer, counter: state.timer.counter - 1}
            }
        case 'SAVE_TRIP_TO_STATE':
            return {
                ...state,
                trip: action.trip
            }
        default:
            return state
    }
}

export default tripReducer;