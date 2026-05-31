import { Flex } from "@chakra-ui/react";
import ProfileLink from "./ProfileLink";
import CreatePost from "./CreatePost";
import Search from "./Search";
import Home from "./Home";

const SidebarItems = () => {
  return (
    <Flex 
      direction={{ base: "row", md: "column" }} 
      gap={{ base: 2, md: 3, lg: 5 }} 
      w="full"
      justifyContent={{ base: "space-around", md: "flex-start" }}
      alignItems={{ base: "center", lg: "stretch" }}
    >
      <Home />
      <Search />
      <CreatePost />
      <ProfileLink />
    </Flex>
  );
};

export default SidebarItems;
