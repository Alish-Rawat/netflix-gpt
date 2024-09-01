// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIWyzoumNKuMwyOEtXTYokT1BdGeTrgbg",
  authDomain: "netflixgpt-41d20.firebaseapp.com",
  projectId: "netflixgpt-41d20",
  storageBucket: "netflixgpt-41d20.appspot.com",
  messagingSenderId: "77194494372",
  appId: "1:77194494372:web:7537cfa8824d1140350131",
  measurementId: "G-04P29VSJR3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
