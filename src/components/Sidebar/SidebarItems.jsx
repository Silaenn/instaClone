import { Flex } from "@chakra-ui/react";
import ProfileLink from "./ProfileLink";
import CreatePost from "./CreatePost";
import Search from "./Search";
import Home from "./Home";

const SidebarItems = () => {
  return (
    <Flex direction="column" gap="20px" width="100%">
      <Home />
      <Search />
      <CreatePost />
      <ProfileLink />
    </Flex>
  );
};

export default SidebarItems;
