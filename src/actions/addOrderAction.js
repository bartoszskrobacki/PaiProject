import {ADD_ORDER, ADD_PRODUCT_BASKET, ADD_PRODUCT_ERROR} from "./types";

export const addOrder = (listOfOrders1, neworder) => {

    return(dispatch, getState, {getFirebase}) => {


        let listOfOrders = [];
        listOfOrders = listOfOrders1;
        const firestore = getFirebase().firestore();
        const firebase = getFirebase();

        let productAlreadyinCart = false;
        let tableAlreadyinList = false;
        let costOfOldList = 0;

        listOfOrders.forEach((order) =>
        {

            if(order.table === neworder.table) {
                tableAlreadyinList = true;
                costOfOldList = order.orderCost;
                neworder.orderCost = neworder.orderCost + costOfOldList;
                order.listOfCurrentThings.forEach((product) =>{

                    neworder.listOfCurrentThings.forEach((meal) => {
                        if(meal.id === product.id) {
                            meal.quantity += product.quantity;
                            productAlreadyinCart = true;
                        }

                    });
                    if(!productAlreadyinCart){
                        neworder.listOfCurrentThings.push({...product, quantity: 1})
                    }
                    productAlreadyinCart=false;


                });

                firestore.collection('currentOrders').doc(order.id).update({
                    ...neworder
                }).then(()=> {
                    dispatch({
                        type: ADD_ORDER,
                        payload: {listOfOrders}
                    })
                }).catch((error) => {
                    dispatch({
                        type: ADD_PRODUCT_ERROR,
                        error
                    });
                })

            }
        });

        if(!tableAlreadyinList){
            neworder = {...neworder,  waiterFirstName: getState().firebase.profile.firstName,
                waiterLastName: getState().firebase.profile.lastName,
                waiterID: getState().firebase.auth.uid,
                createdAt: new Date()};



            firestore.collection('currentOrders').add({
                ...neworder
            }).then((docRef)=> {
                //   listOfOrders.push({...neworder, id: docRef.id});
                console.log(docRef.id);
                dispatch({
                    type: ADD_ORDER,
                    payload: {listOfOrders}
                })
            }).catch((error) => {
                dispatch({
                    type: ADD_PRODUCT_ERROR,
                    error
                });
            })

        }



    }

};


