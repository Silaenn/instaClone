import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { NotificationsLogo } from "../../assets/contants";

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
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        border="2px solid transparent"
        _hover={{
          bg: "retro.main",
          color: "black",
          border: "2px solid black",
          boxShadow: "4px 4px 0px 0px #000",
          transform: "translate(-2px, -2px)",
        }}
        transition="0.1s"
        cursor="pointer"
      >
        <NotificationsLogo />
        <Box display={{ base: "none", md: "block" }} fontWeight="800">Notifications</Box>
      </Flex>
    </Tooltip>
  );
};

export default Notifications;
