import { useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useSearchUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const showToast = useShowToast();

  const getUserProfile = async (username) => {
    const qValue = (username || "").trim();
    if (!qValue) return showToast("Error", "Please enter a username", "error");

    setIsLoading(true);
    setUser(null);
    setNotFound(false);
    try {
      const q = query(
        collection(firestore, "users"),
        orderBy("username"),
        where("username", ">=", qValue),
        where("username", "<=", qValue + '\uf8ff')
      );

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        // take the first match (prefix search may return multiple)
        const firstDoc = querySnapshot.docs[0];
        setUser(firstDoc.data());
        setNotFound(false);
        return;
      }

      // fallback: client-side case-insensitive prefix search (in case usernames have different cases)
      const allSnap = await getDocs(collection(firestore, "users"));
      const foundDoc = allSnap.docs.find((d) =>
        (d.data().username || "").toLowerCase().startsWith(qValue.toLowerCase())
      );

      if (foundDoc) {
        setUser(foundDoc.data());
        setNotFound(false);
        return;
      }

      // No match found - mark as notFound but DON'T show toast
      setNotFound(true);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, getUserProfile, user, setUser, notFound, setNotFound };
};

export default useSearchUser;
