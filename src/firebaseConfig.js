
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJWT7w3VW2tVdPNQWtlu53QiVENRGMbgM",
  authDomain: "firedriver-e5317.firebaseapp.com",
  projectId: "firedriver-e5317",
  storageBucket: "firedriver-e5317.appspot.com",
  messagingSenderId: "573995698333",
  appId: "1:573995698333:web:a781e606d7d4422aca6c74",
  measurementId: "G-1QB62N05BY"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);