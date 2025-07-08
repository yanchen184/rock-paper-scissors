// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfBIQPpRN7XQ1nAvaohdN8L-uMXo7phR0",
  authDomain: "rock-paper-scissors-d24d2.firebaseapp.com",
  projectId: "rock-paper-scissors-d24d2",
  storageBucket: "rock-paper-scissors-d24d2.firebasestorage.app",
  messagingSenderId: "307602535416",
  appId: "1:307602535416:web:218f699e6777f52cbd9c0d",
  measurementId: "G-KPS3ZGRJMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
export default app;