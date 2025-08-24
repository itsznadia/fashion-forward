// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkxw-SDn9FjEwPbzfrjrOgMZbLZntYUMM",
  authDomain: "fashion-forward-9a4b7.firebaseapp.com",
  projectId: "fashion-forward-9a4b7",
  storageBucket: "fashion-forward-9a4b7.firebasestorage.app",
  messagingSenderId: "877210482756",
  appId: "1:877210482756:web:81c1a2a56fc83d26e62411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;