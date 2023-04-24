
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD8RbiE25aQ-ha03ZDPHPVj_iS2_62EA9c",
  authDomain: "filmyunboxing-38775.firebaseapp.com",
  projectId: "filmyunboxing-38775",
  storageBucket: "filmyunboxing-38775.appspot.com",
  messagingSenderId: "661635869702",
  appId: "1:661635869702:web:e999f1ff6df0b4516de787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const moviesRef=collection(db,"movies")
export const reviewsRef=collection(db,"reviews")

export default app;