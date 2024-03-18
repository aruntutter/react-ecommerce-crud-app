import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5if836cmOK9Pl1jP_2IOeMVkEmXJ-IoM",
  authDomain: "e-com-bb9f3.firebaseapp.com",
  projectId: "e-com-bb9f3",
  storageBucket: "e-com-bb9f3.appspot.com",
  messagingSenderId: "106292682912",
  appId: "1:106292682912:web:82b27a948bd95b27efa9c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);

export { fireDb, auth };
