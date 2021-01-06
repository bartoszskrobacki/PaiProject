import {CREATE_USER_ERROR, CREATE_USER_SUCCESS} from "./types"

export const createUserAction = (newUser) => {

    return(dispatch, getState, {getFirebase}) => {

        const firestore = getFirebase().firestore();

        firestore.collection('users').add(newUser).then(() => {
            dispatch({type: CREATE_USER_SUCCESS})
        }).catch(err => {
            console.log(err);
            dispatch({type: CREATE_USER_ERROR})
        })
    }
};

