// src/firebase.js

// Importa i moduli principali
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// La tua configurazione Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBy9Y2ahJdmj66A0Rz-rSjkeeLwASHO_Jc",
  authDomain: "fixnow-22379.firebaseapp.com",
  projectId: "fixnow-22379",
  storageBucket: "fixnow-22379.appspot.com",  // ⚡️ corretto: manca una "p" rispetto a prima
  messagingSenderId: "54994993133",
  appId: "1:54994993133:web:8d28f1f33519420519f1e4"
};

// Inizializza l'app Firebase
const app = initializeApp(firebaseConfig);

// Database Firestore
const db = getFirestore(app);

// Storage per foto
const storage = getStorage(app);

// Esporta db e storage
export { db, storage };
