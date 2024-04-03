// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZTv5NxMzbn6c_hE1_p0-M86q4ZJSKlgs",
    authDomain: "recepie-faed7.firebaseapp.com",
    projectId: "recepie-faed7",
    storageBucket: "recepie-faed7.appspot.com",
    messagingSenderId: "671728078295",
    appId: "1:671728078295:web:c39f0ea35e454c27ff0f92",
    measurementId: "G-CCGV7647Y3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);





// const analytics = getAnalytics(app);