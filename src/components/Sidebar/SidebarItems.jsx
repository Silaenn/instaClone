import { Flex } from "@chakra-ui/react";
import ProfileLink from "./ProfileLink";
import CreatePost from "./CreatePost";
import Search from "./Search";
import Home from "./Home";

const SidebarItems = () => {
  return (
    <Flex direction={{ base: "row", md: "column" }} gap={{ base: 2, md: 5 }} width="100%" justifyContent={{ base: "space-around", md: "flex-start" }}>
      <Home />
      <Search />
      <CreatePost />
      <ProfileLink />
    </Flex>
  );
};

export default SidebarItems;
