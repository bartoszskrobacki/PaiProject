import {SIGN_UP_ERROR, SIGN_UP_SUCCESS} from "./types"

export const completeOrder = (Order) => {

    return(dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();

        const  docRef = getFirebase().firestore().collection('currentOrders').doc(Order.id);

        firestore.collection('completedOrders').doc(Order.id).set(
            Order
    ).then(()=> {
        docRef.delete()
        }).then(() => {
    dispatch({ type: SIGN_UP_SUCCESS })
}).catch(err => {
    console.log(err);
    dispatch({ type: SIGN_UP_ERROR})
})


    }

};