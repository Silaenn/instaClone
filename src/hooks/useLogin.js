import { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";

const useLogin = () => {
  const [signInWithEmailAndPassword, user, loading, firebaseError] =
    useSignInWithEmailAndPassword(auth);

  const [errorMessage, setErrorMessage] = useState(null);
  const lognUser = useAuthStore((state) => state.login);

  // map firebase hook error to friendly UI message as soon as it appears
  useEffect(() => {
    if (firebaseError) {
      const msg = "Invalid email or password";
      setErrorMessage(msg);
    }
  }, [firebaseError]);

  const login = async (inputs) => {
    setErrorMessage(null);
    if (!inputs.email || !inputs.password) {
      const msg = "Please fill all the fields";
      setErrorMessage(msg);
      return;
    }
    try {
      const userCred = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (userCred) {
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        lognUser(docSnap.data());
        setErrorMessage(null);
      }
    } catch (err) {
      const msg = "Unable to login. Please try again.";
      setErrorMessage(msg);
      console.error(err);
    }
  };

  return { loading, error: errorMessage ? { message: errorMessage } : null, login };
};

export default useLogin;
