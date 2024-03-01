import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";
import CreatePost from "./CreatePost";
import Search from "./Search";
import Home from "./Home";

const SidebarItems = () => {
  return (
    <>
      <Home />
      <Search />
      <Notifications />
      <CreatePost />

      <ProfileLink />
    </>
  );
};

export default SidebarItems;
