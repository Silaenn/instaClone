import { Flex, Box } from "@chakra-ui/react";
import SidebarItems from "./SidebarItems";

const FloatingDock = () => {
  return (
    <Box 
      position="fixed" 
      bottom="0" 
      left="0" 
      right="0" 
      zIndex={10} 
      bg="white" 
      borderTop="3px solid black"
      p={2}
      pb={{ base: 4, sm: 2 }} // Extra padding for safe area on some mobile browsers
    >
      <Flex
        justifyContent="space-around"
        alignItems="center"
        maxW="500px"
        mx="auto"
      >
        <SidebarItems />
      </Flex>
    </Box>
  );
};
export default FloatingDock;
