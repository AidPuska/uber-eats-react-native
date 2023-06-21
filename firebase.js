// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: ENV.API_KEY,
  authDomain: "uber-eats-react-native-a8e2e.firebaseapp.com",
  projectId: "uber-eats-react-native-a8e2e",
  storageBucket: "uber-eats-react-native-a8e2e.appspot.com",
  messagingSenderId: "767293703641",
  appId: "1:767293703641:web:65d03b005d7176c7f0c5c8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
