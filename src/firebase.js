import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtliHCvECZ5kDKY6eDHSIOi7xYUz4j2is",
  authDomain: "tu-auth-domain",
  projectId: "tu-project-id",
  storageBucket: "tu-storage-bucket",
  messagingSenderId: "tu-messaging-sender-id",
  appId: "tu-app-id",
  measurementId: "tu-measurement-id"
};

const fireBaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(fireBaseApp)
export const auth = getAuth();

export default fireBaseApp
