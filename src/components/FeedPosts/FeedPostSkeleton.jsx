import { Box, Flex, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react";
import { homeSurfaceSoft } from "../../styles/homeStyles";

const FeedPostSkeleton = () => {
  return (
    <VStack gap={4} alignItems={"stretch"}>
      <Flex gap="3" alignItems="center" {...homeSurfaceSoft} p={4}>
        <Box border="2px solid black" p="2px" borderRadius={0}>
          <SkeletonCircle size="10" />
        </Box>
        <VStack gap={2} alignItems={"flex-start"} flex={1} minW={0}>
          <Skeleton height="12px" w={"160px"} borderRadius={0} />
          <Skeleton height="12px" w={"120px"} borderRadius={0} />
        </VStack>
      </Flex>

      <Box border="3px solid black" borderRadius={0} boxShadow="4px 4px 0px 0px #000" w="full" overflow="hidden" aspectRatio={1}>
        <Skeleton w="full" h="full" startColor="gray.800" endColor="gray.600" />
      </Box>
    </VStack>
  );
};

export default FeedPostSkeleton;
