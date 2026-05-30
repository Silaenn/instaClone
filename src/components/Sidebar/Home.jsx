import { Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Home = () => {
  return (
    <Tooltip
      hasArrow
      label={"Home"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Link
        display={"flex"}
        to={"/"}
        as={RouterLink}
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
      >
        <AiFillHome size={25} />
        <Box display={{ base: "none", md: "block" }} fontWeight="800">Home</Box>
      </Link>
    </Tooltip>
  );
};

export default Home;
