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
      display={{ base: "block", lg: "none" }}
    >
      <Link
        display={"flex"}
        to={"/"}
        as={RouterLink}
        alignItems={"center"}
        gap={4}
        borderRadius={0}
        p={2}
        w={{ base: 12, lg: "full" }}
        justifyContent={{ base: "center", lg: "flex-start" }}
        {...sidebarItem}
      >
        <AiFillHome size={25} />
        <Box display={{ base: "none", lg: "block" }} fontWeight="800">Home</Box>
      </Link>
    </Tooltip>
  );
};

export default Home;
