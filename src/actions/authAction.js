import {LOGIN_USER, LOGIN_ERROR} from "./types";



export const authAction = (login, password) => {

    return(dispatch, getState, {getFirebase}) => {
        const firebase  = getFirebase();

        firebase.auth().signInWithEmailAndPassword(login, password).then(() => {
            dispatch({
                type: LOGIN_USER
            })
        }).catch(()=> {
            dispatch({
                type: LOGIN_ERROR
            })
        });



    }

};



