import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCAti-jkevt0knXA704TRUFDYxxRKFnUOA",
    authDomain: "nucbachat-fb371.firebaseapp.com",
    projectId: "nucbachat-fb371",
    storageBucket: "nucbachat-fb371.appspot.com",
    messagingSenderId: "992718259518",
    appId: "1:992718259518:web:e8e87105258caf9a0ed86f"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore }