
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqQYZDpSaTMFlJQUL9AgGy66NiGnyqCbs",
  authDomain: "netzero-d3b98.firebaseapp.com",
  projectId: "netzero-d3b98",
  storageBucket: "netzero-d3b98.firebasestorage.app",
  messagingSenderId: "448176617124",
  appId: "1:448176617124:web:d396fb600cec9e26fcd831",
  measurementId: "G-EE6BQHF44Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
