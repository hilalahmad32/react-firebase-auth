import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCSTpubGbbIa5Obx4SmYUXTBBVKb6EMo28",
    authDomain: "react-firebase-92716.firebaseapp.com",
    projectId: "react-firebase-92716",
    storageBucket: "react-firebase-92716.appspot.com",
    messagingSenderId: "170565011160",
    appId: "1:170565011160:web:51a9a6932b130674d579ad"
};

initializeApp(firebaseConfig);

export const auth = getAuth();