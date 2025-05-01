// Importa i moduli principali
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"; // 👈 AGGIUNTO

// La tua configurazione Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBy9Y2ahJdmj66A0Rz-rSjkeeLwASHO_Jc",
  authDomain: "fixnow-22379.firebaseapp.com",
  projectId: "fixnow-22379",
  storageBucket: "fixnow-22379.appspot.com",
  messagingSenderId: "54994993133",
  appId: "1:54994993133:web:8d28f1f33519420519f1e4"
};

// Inizializza l'app Firebase
const app = initializeApp(firebaseConfig);

// Database Firestore
const db = getFirestore(app);

// Storage per foto
const storage = getStorage(app);

// Auth per login
const auth = getAuth(app);

// Esporta db, storage, auth
export { db, storage, auth };
