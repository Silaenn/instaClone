import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGmscGj2P_ldvXbtr8t6NCvFeeVr21z8Y",
  authDomain: "insta-clone-yt-c3478.firebaseapp.com",
  projectId: "insta-clone-yt-c3478",
  storageBucket: "insta-clone-yt-c3478.appspot.com",
  messagingSenderId: "199307055590",
  appId: "1:199307055590:web:c0a9f99ecea6728b210627",
  measurementId: "G-BE06DRSRWL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
