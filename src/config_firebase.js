// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6pqT_siuboJL-J4W0va4nMef5GFDTiYc",
  authDomain: "duan1-54bce.firebaseapp.com",
  databaseURL: "https://duan1-54bce-default-rtdb.firebaseio.com",
  projectId: "duan1-54bce",
  storageBucket: "duan1-54bce.appspot.com",
  messagingSenderId: "852962025673",
  appId: "1:852962025673:web:fea6b76c207f5203386d18",
  measurementId: "G-4EMJN86FRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const data = getDatabase(app);