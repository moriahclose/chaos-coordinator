// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6gswsL3lGz6pEKmSs-Z89msrCnUhfF58",
  authDomain: "chaos-coordinator.firebaseapp.com",
  projectId: "chaos-coordinator",
  storageBucket: "chaos-coordinator.firebasestorage.app",
  messagingSenderId: "560553628890",
  appId: "1:560553628890:web:a09ae1e988d600fac841e3",
  measurementId: "G-XVLTFG22YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // For Firestore
// const analytics = getAnalytics(app);

export { db }