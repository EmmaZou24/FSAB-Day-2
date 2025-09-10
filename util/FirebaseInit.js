import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBV4GFqw5Jykkc1iyRWEZs8ZN3u971N1jo",
  authDomain: "fsab-bootcamp-f8808.firebaseapp.com",
  projectId: "fsab-bootcamp-f8808",
  storageBucket: "fsab-bootcamp-f8808.firebasestorage.app",
  messagingSenderId: "821025391238",
  appId: "1:821025391238:web:26e5b09b5061887bb6c707",
  measurementId: "G-3DEMXKWCTZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);