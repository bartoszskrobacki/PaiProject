import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createFirestoreInstance} from "redux-firestore";
import { ReactReduxFirebaseProvider} from "react-redux-firebase";
import {store} from "./store";
import firebase from './config'
import 'firebase/firestore';
import {Provider} from "react-redux";

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    profileParamsToPopulate: [
        { child: 'role', root: 'roles' }, // populates user's role with matching role object from roles
    ]
};

const rrfProps = {
    firebase,
    useFirestoreForProfile: true,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};



ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
    <App />
      </ReactReduxFirebaseProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
