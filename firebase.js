import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBg3E0d2zoAEHJhhpWbAQ3KSw9VlxkRias",
  authDomain: "mindmapcodewords.firebaseapp.com",
  projectId: "mindmapcodewords",
  storageBucket: "mindmapcodewords.firebasestorage.app",
  messagingSenderId: "246370170293",
  appId: "1:246370170293:web:23965a359b816f60bed5fc"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

signInAnonymously(auth);
