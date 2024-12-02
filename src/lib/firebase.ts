import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBeeDgAd1ZXnSQAHNsvrZ30uDNde9IVZ50",
  authDomain: "induction-platform-bbrc.firebaseapp.com",
  projectId: "induction-platform-bbrc",
  storageBucket: "induction-platform-bbrc.firebasestorage.app",
  messagingSenderId: "441162522294",
  appId: "1:441162522294:web:80b73a48c3cf8076629017"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);