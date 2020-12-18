export const signIn = (credentials) => {
    return (dispatch) => {
        try {
            if(credentials.password === 'test1234' && credentials.email === 'test')
                dispatch({type: "SIGN_IN_SUCCESS"})
        } catch (e) {
            dispatch({type: "SIGN_IN_ERROR", e})
        }
    }
}