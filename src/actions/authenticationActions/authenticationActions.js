import * as service from '../../services/authenticationService';

export const signIn = (credentials) => {
    return (dispatch) => {
        try{
            service.signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            ).then((response) => {
                if(response)
                    dispatch({type: "SIGN_IN_SUCCESS"})
                else
                    dispatch({type: "SIGN_IN_ERROR", response})
            }).catch((error) => {
                dispatch({type: "SIGN_IN_ERROR", error})
            })
        } catch(error) {
            dispatch({type: "SIGN_IN_ERROR", error})
        }
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