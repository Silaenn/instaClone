import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";
import useAuthStore from "../store/authStore";

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, hookUser, loading, firebaseError] =
    useCreateUserWithEmailAndPassword(auth);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const loginUser = useAuthStore((state) => state.login);

  useEffect(() => {
    if (firebaseError && !hookUser) {
      setErrorMessage("Unable to create account. Please check your details.");
    }
  }, [firebaseError, hookUser]);

  const signup = async (inputs) => {
    setErrorMessage(null);
    setIsSubmitting(true);

    if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullName) {
      setErrorMessage("Please fill all the fields");
      setIsSubmitting(false);
      return;
    }

    const usersRef = collection(firestore, "users");
    const q = query(usersRef, where("username", "==", inputs.username));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      setErrorMessage("Username already exists");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(inputs.email, inputs.password);
      const newuser = result && result.user ? result : null;

      if (newuser && newuser.user) {
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
        setErrorMessage(null);
      } else if (hookUser) {
        const userId = hookUser.uid || (hookUser.user && hookUser.user.uid) || null;
        if (userId) {
          const userDoc = {
            uid: userId,
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
          await setDoc(doc(firestore, "users", userId), userDoc);
          localStorage.setItem("user-info", JSON.stringify(userDoc));
          loginUser(userDoc);
          setErrorMessage(null);
        }
      } else if (firebaseError) {
        setErrorMessage("Unable to create account. Please check your details.");
      }
    } catch (err) {
      setErrorMessage("Unable to create account. Please try again later.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    loading: isSubmitting || loading,
    error: errorMessage ? { message: errorMessage } : null,
    signup,
  };
};

export default useSignUpWithEmailAndPassword;