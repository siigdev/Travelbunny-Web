import * as service from '../../services/authenticationService';

export const signIn = (credentials) => {
    return (dispatch) => {
        service.signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: "SIGN_IN_SUCCESS"})
        }).catch((error) => {
            dispatch({type: "SIGN_IN_ERROR", error})
        })
    }
}

export const signOut = () => {
    return (dispatch) => {
        try {
            dispatch({type: "SIGN_OUT_SUCCESS"})
        } catch (error) {
            dispatch({type: "SIGN_OUT_ERROR", error})
        }
    }
}