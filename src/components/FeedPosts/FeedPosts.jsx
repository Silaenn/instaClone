import { Box, Text, VStack } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";
import { homeSurfaceSoft, homeSectionTitle } from "../../styles/homeStyles";
import FeedPostSkeleton from "./FeedPostSkeleton";
import { motion, AnimatePresence } from "framer-motion";

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();

  return (
    <VStack alignItems="stretch" spacing={6}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <VStack key="skeleton-container" alignItems="stretch" spacing={6} w="full">
            {[0, 1, 2, 3].map((_, idx) => (
              <motion.div
                key={`skeleton-${idx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FeedPostSkeleton />
              </motion.div>
            ))}
          </VStack>
        ) : (
          <VStack key="posts-container" alignItems="stretch" spacing={6} w="full">
            {posts.length > 0 ? (
              posts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <FeedPost post={post} />
                </motion.div>
              ))
            ) : (
              <motion.div
                key="empty-feed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Box {...homeSurfaceSoft} p={6}>
                  <Text {...homeSectionTitle}>Empty feed</Text>
                  <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={900} textTransform="uppercase" mt={2}>
                    Your feed is quiet.
                  </Text>
                  <Text mt={2} fontWeight={700} opacity={0.75}>
                    Follow more people or start posting to fill this space with something worth scrolling.
                  </Text>
                </Box>
              </motion.div>
            )}
          </VStack>
        )}
      </AnimatePresence>
    </VStack>
  );
};

export default FeedPosts;
