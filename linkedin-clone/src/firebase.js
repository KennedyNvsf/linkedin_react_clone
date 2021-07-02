
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiZQoDqI3JFYKzerB55Gt8logHk-vC7-g",
    authDomain: "linkedin-clone-kdevs.firebaseapp.com",
    projectId: "linkedin-clone-kdevs",
    storageBucket: "linkedin-clone-kdevs.appspot.com",
    messagingSenderId: "876991351159",
    appId: "1:876991351159:web:63fa0690f827df518af972",
    measurementId: "G-HKQYJP0F9H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);//CREATING CONNECTION TO FIREBASE
  const db = firebaseApp.firestore();//LINKING THE DATABASE
  const auth = firebase.auth(); //PASSING AUTHENTICATION FUNCTIONALITIES

  export {db, auth}; //exporting because these var will be used outside