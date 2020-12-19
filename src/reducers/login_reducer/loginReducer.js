const initState = {
    authError: null,
    auth: false
}

const loginReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                authError: action.error
            };
        case 'SIGN_UP_ERROR':
            return {
                ...state,
                authError: action.error
            };
        case 'SIGN_IN_SUCCESS':
            return {
                ...state,
                auth: true,
                authError: null
            };
        case 'SIGN_IN_ERROR':
            return {
                ...state,
                authError: action.error
            };
        case 'SIGN_OUT_SUCCESS':
            return {
                ...state,
                auth: false,
            }
        default:
            return state
    }
}

export default loginReducer;