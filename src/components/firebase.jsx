  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfQ35AJC_DrrOCIJeArnVDSaUQXI2fKQ0",
  authDomain: "vinod-sarees-1b11e.firebaseapp.com",
  projectId: "vinod-sarees-1b11e",
  storageBucket: "vinod-sarees-1b11e.appspot.com",
  messagingSenderId: "76008600954",
  appId: "1:76008600954:web:6a452794dbb3593cf092c3",
  measurementId: "G-TV52Q34EJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);