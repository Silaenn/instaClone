import { Avatar, Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import { sidebarItem } from "../../styles/homeStyles";

const ProfileLink = () => {
  const authUser = useAuthStore((state) => state.user);

  return (
    <Tooltip
      hasArrow
      label={"Profile"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Link
        display={"flex"}
        to={`/${authUser?.username}`}
        as={RouterLink}
        alignItems={"center"}
        gap={4}
        borderRadius={0}
        p={2}
        w={{ base: 12, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        {...sidebarItem}
      >
        <Avatar size={"sm"} src={authUser?.profilePicURL || ""} border="2px solid black" borderRadius={0} />
        <Box display={{ base: "none", md: "block" }} fontWeight="800">Profile</Box>
      </Link>
    </Tooltip>
  );
};

export default ProfileLink;
