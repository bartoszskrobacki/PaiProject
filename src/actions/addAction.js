import { ADD_PRODUCT_BASKET} from "./types";
import {ADD_PRODUCT_ERROR} from "./types";
import {getFirebase} from "react-redux-firebase";
import {getFirestore} from "redux-firestore";

export const addAction = (cartItems, product) => {

    let productAlreadyInCart = false;
    let costOfTheProduct = product.price;
    cartItems.forEach((meal) =>
    {
        if(meal.id === product.id) {
            meal.quantity++;
            productAlreadyInCart = true;
        }
    });

    if(!productAlreadyInCart){
        cartItems.push({...product,quantity:1});
    }

    return(dispatch) => {
            dispatch({
                type: ADD_PRODUCT_BASKET,
                payload: {cartItems, costOfTheProduct}
            })
    }

};




