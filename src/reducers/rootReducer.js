import {combineReducers} from "redux";
import authReducer from "./authReducer";
import orderReducer from "./orderReducer";
import finalizeOrderReducer from "./finalizeOrderReducer";
import {firebaseReducer} from 'react-redux-firebase'
import 'firebase/firestore'
import { firestoreReducer } from 'redux-firestore'

export default combineReducers({
    authState: authReducer,
    orderState: orderReducer,
    finalizeOrderState: finalizeOrderReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})
