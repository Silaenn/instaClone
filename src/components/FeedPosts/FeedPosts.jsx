import { Box, Text, VStack } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";
import { homeSurfaceSoft, homeSectionTitle } from "../../styles/homeStyles";
import FeedPostSkeleton from "./FeedPostSkeleton";

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();

  return (
    <VStack alignItems="stretch" spacing={6}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <FeedPostSkeleton key={idx} />
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
