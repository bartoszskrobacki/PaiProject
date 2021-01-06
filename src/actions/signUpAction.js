import {SIGN_UP_ERROR, SIGN_UP_SUCCESS} from "./types"

export const signUpAction = (newUser) => {
    console.log(newUser);
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        const firestore = getFirebase().firestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) =>  {
            console.log(resp);
           firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                role: newUser.role,
               phoneNumber: newUser.phoneNumber,
               email: newUser.email
            })
        }).then(() => {
            dispatch({ type: SIGN_UP_SUCCESS })
        }).catch(err => {
            console.log(err);
            dispatch({ type: SIGN_UP_ERROR})
        })


    }

};