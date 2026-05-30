import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";
const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      gap={{ base: 4, sm: 10 }}
      textTransform={"uppercase"}
      fontWeight={900}
    >
      <Flex
        borderTop={"4px solid black"}
        alignItems={"center"}
        p="3"
        gap={2}
        cursor={"pointer"}
        _hover={{ bg: "white" }}
      >
        <Box fontSize={20}>
          <BsGrid3X3 strokeWidth={1} />
        </Box>
        <Text fontSize={14} display={{ base: "none", sm: "block" }}>
          Posts
        </Text>
      </Flex>

      <Flex alignItems={"center"} p="3" gap={2} cursor={"pointer"} _hover={{ bg: "white" }}>
        <Box fontSize={20}>
          <BsBookmark />
        </Box>
        <Text fontSize={14} display={{ base: "none", sm: "block" }}>
          Saved
        </Text>
      </Flex>

      <Flex alignItems={"center"} p="3" gap={2} cursor={"pointer"} _hover={{ bg: "white" }}>
        <Box fontSize={20}>
          <BsSuitHeart />
        </Box>
        <Text fontSize={14} display={{ base: "none", sm: "block" }}>
          Likes
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTabs;
