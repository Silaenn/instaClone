import { Box, Flex, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react";
import { homeSurfaceSoft } from "../../styles/homeStyles";

const FeedPostSkeleton = () => {
  return (
    <VStack gap={4} alignItems={"stretch"}>
      <Flex gap="3" alignItems="center" {...homeSurfaceSoft} p={4}>
        <SkeletonCircle size="10" />
        <VStack gap={2} alignItems={"flex-start"} flex={1}>
          <Skeleton height="10px" w={"160px"} />
          <Skeleton height="10px" w={"120px"} />
        </VStack>
      </Flex>

      <Skeleton w={"full"} borderRadius={0}>
        <Box h={"420px"} {...homeSurfaceSoft}>
          contents wrapped
        </Box>
      </Skeleton>
    </VStack>
  );
};

export default FeedPostSkeleton;
