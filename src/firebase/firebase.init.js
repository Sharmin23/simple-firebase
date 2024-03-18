// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUSxdzLylMbat0Ve8aK3R077PKrhQcSng",
  authDomain: "simple-firebase-bbd2d.firebaseapp.com",
  projectId: "simple-firebase-bbd2d",
  storageBucket: "simple-firebase-bbd2d.appspot.com",
  messagingSenderId: "176544244664",
  appId: "1:176544244664:web:5c366511f502179273e54d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;