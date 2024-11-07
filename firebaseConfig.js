// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'dotenv/config'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: procces.env.FIRESTORE_API_KEY,
  authDomain: procces.env.FIREBASE_AUTH_DOMAIN,
  projectId: procces.env.FIREBASE_PROJECT_ID,
  storageBucket: procces.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: procces.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: procces.env.FIREBASE_APP_ID,
  measurementId: procces.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // For Firestore
// const analytics = getAnalytics(app);

export { db }