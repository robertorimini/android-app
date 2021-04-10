import firebase from 'firebase'
import 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDhYCL7FctAXwp-Hlmazsuos6JaOPvYHVw",
    authDomain: "robertorimini-41c7a.firebaseapp.com",
    projectId: "robertorimini-41c7a",
    storageBucket: "robertorimini-41c7a.appspot.com",
    messagingSenderId: "1023507128961",
    appId: "1:1023507128961:web:517fc51980124dedc8e380"
  };
  // Initialize Firebase
  

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()

  export default {
    firebaseConfig,
    db,

  }