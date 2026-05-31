import { Flex, Skeleton, SkeletonCircle, VStack, Box } from "@chakra-ui/react";
import { homeSurfaceSoft } from "../../styles/homeStyles";

const SuggestedUserSkeleton = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      p={3}
      {...homeSurfaceSoft}
    >
      <Flex alignItems={"center"} gap={2} minW={0}>
        <Box border="2px solid black" borderRadius={0} p="2px">
          <SkeletonCircle size="10" />
        </Box>
        <VStack spacing={1} alignItems={"flex-start"} ml={2} minW={0}>
          <Skeleton height="12px" w="100px" borderRadius={0} />
          <Skeleton height="10px" w="80px" borderRadius={0} />
        </VStack>
      </Flex>
      <Box>
        <Skeleton height="30px" w="80px" borderRadius={0} />
      </Box>
    </Flex>
  );
};

export default SuggestedUserSkeleton;
