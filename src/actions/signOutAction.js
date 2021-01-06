import {LOGOUT_SUCCESS} from "./types";

export const signOut = () => {

    return(dispatch, getState, {getFirebase}) => {

        const firebase  = getFirebase();
        firebase.auth().signOut().then(() => {

            dispatch({
                type: LOGOUT_SUCCESS
            })
        })
    };

};