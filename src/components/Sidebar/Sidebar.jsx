import { Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/contants";

import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import SidebarItems from "./SidebarItems";
import { homeSurface } from "../../styles/homeStyles";

const Sidebar = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  return (
    <Box
      height={"100vh"}
      borderRight={"none"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex
        direction={"column"}
        gap={8}
        w="full"
        height={"full"}
        p={4}
        {...homeSurface}
      >
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <Box p={2} bg="black" color="white" display="inline-block">
            <InstagramLogo />
          </Box>
        </Link>

        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
          bg="black"
          _hover={{
            bg: "retro.main",
          }}
          w={{ base: 10 }}
        >
          <InstagramMobileLogo />
        </Link>

        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <SidebarItems />
        </Flex>

        <Box
          mt="auto"
          p={3}
          border="2px solid black"
          bg="retro.bg"
          boxShadow="4px 4px 0px 0px #000"
          fontSize={12}
          fontWeight={700}
          lineHeight={1.5}
        >
          Home feels better when the surface is calm and the accents do the work.
        </Box>

        {/* LOGOUT    */}
        <Tooltip
          hasArrow
          label={"LogOut"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            onClick={handleLogout}
            alignItems={"center"}
            gap={4}
            bg={"retro.pink"}
            color={"white"}
            border={"2px solid black"}
            _hover={{ bg: "black", color: "white", transform: "translate(2px, 2px)", boxShadow: "none" }}
            boxShadow={"4px 4px 0px 0px #000"}
            borderRadius={0}
            p={2}
            w={{ base: 12, md: "full" }}
            mt={"auto"}
            justifyContent={{ base: "center", md: "flex-start" }}
            transition={"0.1s"}
          >
            <BiLogOut size={25} />
            <Button
              display={{ base: "none", md: "block" }}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              isLoading={isLoggingOut}
              color="inherit"
              p={0}
              height="auto"
            >
              LogOut
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
