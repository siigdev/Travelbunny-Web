const initState = {
    authError: null,
    signedIn: false
}

const authReducer = (state = initState, action) => {
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
                signedIn: true,
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
                signedIn: false,
            }
        default:
            return state
    }
}

export default authReducer;