// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_p7dGvkG5T-7gEIVSwjr7Oo_9_vOKJkE",
  authDomain: "social-event-management-1a2d5.firebaseapp.com",
  projectId: "social-event-management-1a2d5",
  storageBucket: "social-event-management-1a2d5.appspot.com",
  messagingSenderId: "475372231432",
  appId: "1:475372231432:web:78ae6cc51305e65f41eabd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;