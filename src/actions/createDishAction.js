import {CREATE_DISH_ERROR, CREATE_DISH_SUCCESS} from "./types"

export const createDishAction = (newDish) => {

    return(dispatch, getState, {getFirebase}) => {

        const firestore = getFirebase().firestore();

        firestore.collection('menu').add({
            name: newDish.name,
            price: newDish.price,
            category: newDish.category,
            placeToPrepare: newDish.placeToPrepare
        }).then(() => {
            dispatch({type: CREATE_DISH_SUCCESS})
        }).catch(err => {
            console.log(err);
            dispatch({type: CREATE_DISH_ERROR})
        })
    }
};

