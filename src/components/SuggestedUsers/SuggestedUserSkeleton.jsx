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
      <Flex alignItems={"center"} gap={2}>
        <SkeletonCircle size="10" />
        <VStack spacing={1} alignItems={"flex-start"}>
          <Skeleton height="10px" w="80px" />
          <Skeleton height="8px" w="50px" />
        </VStack>
      </Flex>
      <Skeleton height="30px" w="80px" />
    </Flex>
  );
};

export default SuggestedUserSkeleton;
