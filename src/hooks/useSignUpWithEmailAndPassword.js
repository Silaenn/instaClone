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
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);

  const signup = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.username ||
      !inputs.fullName
    ) {
      showToast("error", "Please fill all the fields", "error");
      return;
    }

    const usersRef = collection(firestore, "users");

    // Create a query against the collection.
    const q = query(usersRef, where("username", "==", inputs.username));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      showToast("Erorr", "Username already exists", "error");
      return;
    }

    try {
      const newuser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newuser && error) {
        showToast("Error", error.message, "error");
        return;
      }
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
      }
    } catch (err) {
      showToast("Error", err.message, "error");
    }
  };
  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
