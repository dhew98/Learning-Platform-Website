// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKSjQF9KlNlqAq1p4tVCfWw8HW3kyYahY",
    authDomain: "learning-platform-9a9ea.firebaseapp.com",
    projectId: "learning-platform-9a9ea",
    storageBucket: "learning-platform-9a9ea.appspot.com",
    messagingSenderId: "1095363514810",
    appId: "1:1095363514810:web:f460c38bc9b9b25021cd83",
    measurementId: "G-653R42S9J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;