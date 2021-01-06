import {UPDATE_SUCCESSFUL, UPDATE_ERROR} from "./types";

export const updateAction = (nameOfCollection, whatToUpdate, elementToUpdate, pole) => {

    return(dispatch, getState, {getFirebase}) => {

        const firestore = getFirebase().firestore();

                console.log("Update!");
                firestore.collection(nameOfCollection).doc(whatToUpdate).update(
                    pole, elementToUpdate).then(()=> {
                    dispatch({
                        type: UPDATE_SUCCESSFUL,
                    })
                }).catch((error) => {
                    console.log(error);
                    dispatch({
                        type: UPDATE_ERROR,
                        error
                    });
                });
    }

};


