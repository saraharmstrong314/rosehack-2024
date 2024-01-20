import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCusW5Y81A4_wTDBvEsvvNIZCfsGDvTFqU",
    authDomain: "expenses-7d753.firebaseapp.com",
    projectId: "expenses-7d753",
    storageBucket: "expenses-7d753.appspot.com",
    messagingSenderId: "170532996179",
    appId: "1:170532996179:web:638ab4e77f71b5c0def2a6"
  };

const firebaseApp =   firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;