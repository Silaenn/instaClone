import { create } from "zustand";

const useuserProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  //   addPost:()
}));

export default useuserProfileStore;
