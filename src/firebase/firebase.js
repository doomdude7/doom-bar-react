// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "@firebase/firestore";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBTnLOBOtdEyOLjYOE-UGwc3gN5S_T1uGM",
  authDomain: "doombar-9173a.firebaseapp.com",
  projectId: "doombar-9173a",
  storageBucket: "doombar-9173a.appspot.com",
  messagingSenderId: "206937787699",
  appId: "1:206937787699:web:ea2997f4386adba0d10246",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getFirestore(app);

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = async () => {
  return signOut(auth);
};

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
};

export const userDetails = async (currentUser) => {
  const userId = currentUser.uid;
  const q = query(collection(db, "users"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    console.log(doc.id, " ", data);
    return data;
  });
};
