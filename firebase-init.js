// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-analytics.js";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAj4ThnbGjG9FVbPWUEgAcGPVPK8M1oN5E",
  authDomain: "venda-valley-engineering.firebaseapp.com",
  databaseURL: "https://venda-valley-engineering-default-rtdb.firebaseio.com",
  projectId: "venda-valley-engineering",
  storageBucket: "venda-valley-engineering.firebasestorage.app",
  messagingSenderId: "651587110969",
  appId: "1:651587110969:web:3a6726f3f67823106e25e8",
  measurementId: "G-BVE1GXQWY5"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Core Services
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// ✅ Export them so other pages (like book.html) can import
export { app, auth, db };
