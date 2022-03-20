// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNuVu277g1F50HB2KGKaEVsq1lWVWKZEM",
  authDomain: "nadine-s-verbier-invoice-app.firebaseapp.com",
  projectId: "nadine-s-verbier-invoice-app",
  storageBucket: "nadine-s-verbier-invoice-app.appspot.com",
  messagingSenderId: "96919594811",
  appId: "1:96919594811:web:5f53d4bb0524ccc999791e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
