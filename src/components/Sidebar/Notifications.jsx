import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { NotificationsLogo } from "../../assets/contants";
import { sidebarItem } from "../../styles/homeStyles";

const Notifications = () => {
  return (
    <Tooltip
      hasArrow
      label={"Notifications"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Flex
        alignItems={"center"}
        gap={4}
        borderRadius={0}
        p={2}
        w={{ base: 12, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        {...sidebarItem}
        cursor="pointer"
      >
        <NotificationsLogo />
        <Box display={{ base: "none", md: "block" }} fontWeight="800">Notifications</Box>
      </Flex>
    </Tooltip>
  );
};

export default Notifications;
