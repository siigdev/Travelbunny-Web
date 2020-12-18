const initState = {
    authError: null
}

const loginReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SIGN_IN_SUCCESS':
            console.log("yess")
            return {
                ...state,
                authError: 'Sign in failed'
            };
        case 'SIGN_IN_ERROR':
            console.log("nooo")
            return {
                ...state,
                authError: null
            };
        case 'SIGN_UP':
            return state;
        default:
            return state
    }
}

export default loginReducer;