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
      display={{ base: "block", lg: "none" }}
    >
      <Link
        display={"flex"}
        to={`/${authUser?.username}`}
        as={RouterLink}
        alignItems={"center"}
        gap={4}
        borderRadius={0}
        p={2}
        w={{ base: 12, lg: "full" }}
        justifyContent={{ base: "center", lg: "flex-start" }}
        {...sidebarItem}
      >
        <Avatar size={"sm"} src={authUser?.profilePicURL || ""} />
        <Box display={{ base: "none", lg: "block" }} fontWeight="800">Profile</Box>
      </Link>
    </Tooltip>
  );
};

export default ProfileLink;
