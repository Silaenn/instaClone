import { create } from "zustand";

const useUserProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  // this is used to update the number of posts in the profile page
  addPost: (post) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        posts: state.userProfile
          ? [post.id, ...(state.userProfile.posts || [])]
          : [post.id],
      },
    })),
}));

export default useUserProfileStore;
