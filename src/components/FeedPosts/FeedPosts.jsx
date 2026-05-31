import { Box, Flex, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";
import { homeSurfaceSoft, homeSectionTitle } from "../../styles/homeStyles";

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();

  return (
    <VStack alignItems="stretch" spacing={6}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"stretch"}>
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
        ))}

      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost key={post.id} post={post} />)}
      {!isLoading && posts.length === 0 && (
        <Box {...homeSurfaceSoft} p={6}>
          <Text {...homeSectionTitle}>Empty feed</Text>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={900} textTransform="uppercase" mt={2}>
            Your feed is quiet.
          </Text>
          <Text mt={2} fontWeight={700} opacity={0.75}>
            Follow more people or start posting to fill this space with something worth scrolling.
          </Text>
        </Box>
      )}
    </VStack>
  );
};

export default FeedPosts;
