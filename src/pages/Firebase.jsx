// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaFLQsI-LTPGtdHyJai6WA3KYCITMbVZA",
  authDomain: "auth-18-07-2005.firebaseapp.com",
  projectId: "auth-18-07-2005",
  storageBucket: "auth-18-07-2005.firebasestorage.app",
  messagingSenderId: "242131692476",
  appId: "1:242131692476:web:fcae0b7bb6421f222a59b9",
  measurementId: "G-2PVLEV3YV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;