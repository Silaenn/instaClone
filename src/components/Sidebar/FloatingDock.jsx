import { Flex, Box } from "@chakra-ui/react";
import SidebarItems from "./SidebarItems";

const FloatingDock = () => {
  return (
    <Box position="fixed" bottom="20px" left="50%" transform="translateX(-50%)" zIndex={10} w="90%" maxW="400px">
      <Flex
        bg="whiteAlpha.800"
        backdropFilter="blur(10px)"
        border="2px solid"
        borderColor="retro.pink"
        borderRadius="full"
        p={2}
        justifyContent="space-around"
        boxShadow="0px 4px 20px rgba(0,0,0,0.1)"
      >
        <SidebarItems />
      </Flex>
    </Box>
  );
};
export default FloatingDock;
