// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxJgHusrE8Fa2CqHipAVE5O_6cLxPfrfU",
  authDomain: "midterm-redux.firebaseapp.com",
  projectId: "midterm-redux",
  storageBucket: "midterm-redux.appspot.com",
  messagingSenderId: "51484725759",
  appId: "1:51484725759:web:171feae35c5c1362b217ca",
  measurementId: "G-DD333Y5NEJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;