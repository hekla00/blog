// core part of the firebase package
import firebase from "firebase/app";
// import features from firebase
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn9BQIJpIDxP8rt4xWOjShLUtFU_WtUoE",
  authDomain: "udemy-vue-firebase-blog-873b3.firebaseapp.com",
  projectId: "udemy-vue-firebase-blog-873b3",
  storageBucket: "udemy-vue-firebase-blog-873b3.appspot.com",
  messagingSenderId: "27544996964",
  appId: "1:27544996964:web:af08723d693f5599c5a371",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore, timestamp };
