import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const config = {
    apiKey: "AIzaSyCNj5RvfzVQ9OGYlMUcuepahdqT-ne-Fcw",
    authDomain: "restaurantapplication-b9efd.firebaseapp.com",
    databaseURL: "https://restaurantapplication-b9efd.firebaseio.com",
    projectId: "restaurantapplication-b9efd",
    storageBucket: "restaurantapplication-b9efd.appspot.com",
    messagingSenderId: "47696110693",
    appId: "1:47696110693:web:e623fa5faf54b53bfd528c",
    measurementId: "G-HMNKLW71EL"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

firebase.firestore();

export default firebase;