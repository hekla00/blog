// core part of the firebase package
import firebase from "firebase/app";
// import features from firebase
import "firebase/firestore";

const dotenv = require("dotenv");
dotenv.config();
console.log("apikey" + process.env.API_KEY);
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
};

// init firebase
firebase.initializeApp(firebaseConfig);

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore, timestamp };
