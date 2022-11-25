import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh3xOrepDqlXhn6BOlwf0zYwaTWFE3wFg",
  authDomain: "house-marketplace-app-43273.firebaseapp.com",
  projectId: "house-marketplace-app-43273",
  storageBucket: "house-marketplace-app-43273.appspot.com",
  messagingSenderId: "720793033741",
  appId: "1:720793033741:web:68bd371805feba4ce70944",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
