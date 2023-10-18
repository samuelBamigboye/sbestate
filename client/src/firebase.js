// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAquAcimRpzSmeOYRs_8QcdGorNQb4y96s",
  authDomain: "sbestate-173cb.firebaseapp.com",
  projectId: "sbestate-173cb",
  storageBucket: "sbestate-173cb.appspot.com",
  messagingSenderId: "944647760066",
  appId: "1:944647760066:web:cc39f03662604b04d6735b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
