import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByBgvzK-9Cdn8wBGQwzcvgyCF48KAywIE",
  authDomain: "saas-translator-app-15b65.firebaseapp.com",
  projectId: "saas-translator-app-15b65",
  storageBucket: "saas-translator-app-15b65.appspot.com",
  messagingSenderId: "491306700717",
  appId: "1:491306700717:web:d2ffcbded5e532b5249b24",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
