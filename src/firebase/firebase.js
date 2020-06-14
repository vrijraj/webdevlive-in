import firebase from 'firebase/app';
import 'firebase/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyDVkaMARosGP9pHjevLguKK1oKQpUEBFqU",
    authDomain: "webdevlivein.firebaseapp.com",
    databaseURL: "https://webdevlivein.firebaseio.com",
    projectId: "webdevlivein",
    storageBucket: "webdevlivein.appspot.com",
    messagingSenderId: "275959531972",
    appId: "1:275959531972:web:caa7e7df36ea9f24e1fc91"
};

firebase.initializeApp(firebaseConfig);
export default{
  auth:firebase.auth(),
};