import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState, useEffect, useRef } from "react";
import useAuthStore from "../store/authStore";
const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, loading, firebaseError] =
    useCreateUserWithEmailAndPassword(auth);

  const [errorMessage, setErrorMessage] = useState(null);
  const loginUser = useAuthStore((state) => state.login);

  // ref to ignore firebaseError that might be fired after a successful signup
  const ignoreNextFirebaseError = useRef(false);

  // map firebase error to friendly message when it appears, but ignore if flagged
  useEffect(() => {
    if (firebaseError) {
      if (ignoreNextFirebaseError.current) {
        // clear the flag and ignore this error
        ignoreNextFirebaseError.current = false;
        return;
      }
      const msg = "Unable to create account. Please check your details.";
      setErrorMessage(msg);
    }
  }, [firebaseError]);

  const signup = async (inputs) => {
    setErrorMessage(null);
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.username ||
      !inputs.fullName
    ) {
      const msg = "Please fill all the fields";
      setErrorMessage(msg);
      return;
    }

    const usersRef = collection(firestore, "users");

    // Create a query against the collection.
    const q = query(usersRef, where("username", "==", inputs.username));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const msg = "Username already exists";
      setErrorMessage(msg);
      return;
    }

    try {
      const newuser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      // if firebase hook reported an error and no newuser, firebaseError effect will handle it
      if (newuser) {
        const userDoc = {
          uid: newuser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newuser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
        // prevent any firebaseError that may arrive shortly after success from showing
        ignoreNextFirebaseError.current = true;
        setErrorMessage(null);
      }
    } catch (err) {
      const msg = "Unable to create account. Please try again later.";
      setErrorMessage(msg);
      console.error(err);
    }
  };
  return { loading, error: errorMessage ? { message: errorMessage } : null, signup };
};

export default useSignUpWithEmailAndPassword;
