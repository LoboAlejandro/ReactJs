// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCg05kb6CNQkeQrMIFXHuxNE1Ro_by6gO4",
    authDomain: "proyecto-reactjs-a7236.firebaseapp.com",
    projectId: "proyecto-reactjs-a7236",
    storageBucket: "proyecto-reactjs-a7236.appspot.com",
    messagingSenderId: "955587555722",
    appId: "1:955587555722:web:cb793da9a86ab67021d873"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db