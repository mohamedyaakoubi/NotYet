// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyAIBvTqAC7Wf2V-bk3CQfcDLroW0cuxZZ4",
  authDomain: "notyet4r.firebaseapp.com",
  projectId: "notyet4r",
  storageBucket: "notyet4r.appspot.com",
  messagingSenderId: "276781279558",
  appId: "1:276781279558:web:a757c62366721d89dd5d47",
  measurementId: "G-GSLSTGNCTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, analytics, db };
