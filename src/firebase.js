import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiWuEeDaGp-wOBnu4zdYQ5NbFJcG0v6KM",
  authDomain: "web-chat-53cab.firebaseapp.com",
  projectId: "web-chat-53cab",
  storageBucket: "web-chat-53cab.appspot.com",
  messagingSenderId: "918524815288",
  appId: "1:918524815288:web:f7643795c5c943e9bf514d",
  measurementId: "G-GD164SWMTC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
