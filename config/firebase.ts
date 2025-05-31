// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from '@react-native-async-storage/async-storage'
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAloL8n5WjOJeyrMJ5gbv41uRL8B0fPhs4",
  authDomain: "expense-tracker-9e03a.firebaseapp.com",
  projectId: "expense-tracker-9e03a",
  storageBucket: "expense-tracker-9e03a.firebasestorage.app",
  messagingSenderId: "359562585275",
  appId: "1:359562585275:web:9cb8f7be2d0cdfe001b59e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

//db
export const firestore=getFirestore(app);
