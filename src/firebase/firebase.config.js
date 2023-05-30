// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  VITE_apiKey: import.meta.VITE_apiKey,
  VITE_authDomain: import.meta.VITE_authDomain,
  VITE_projectId: import.meta.VITE_projectId,
  VITE_storageBucket: import.meta.VITE_storageBucket,
  VITE_messagingSenderId: import.meta.VITE_messagingSenderId,
  VITE_appId: import.meta.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;