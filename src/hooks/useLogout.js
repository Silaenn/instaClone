import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useLogout = () => {
  const [signout, isLoggingOut, erorr] = useSignOut(auth);
  const showToast = useShowToast();
  const logoutUser = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      await signout();
      localStorage.removeItem("user-info");
      logoutUser();
    } catch (error) {
      showToast("Erorr", erorr.message, "error");
    }
  };
  return { handleLogout, isLoggingOut, erorr };
};

export default useLogout;
