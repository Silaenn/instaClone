import { Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { sidebarItem } from "../../styles/homeStyles";

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
        w={{ base: 12, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        {...sidebarItem}
      >
        <AiFillHome size={25} />
        <Box display={{ base: "none", md: "block" }} fontWeight="800">Home</Box>
      </Link>
    </Tooltip>
  );
};

export default Home;
