import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import useGetUserPosts from "../../hooks/useGetUserPosts";
import ProfilePost from "./ProfilePost";
import { motion, AnimatePresence } from "framer-motion";

const ProfilePosts = () => {
  const { isLoading, posts } = useGetUserPosts();

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="posts-skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Grid
            templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            gap={1}
            columnGap={1}
          >
            {[0, 1, 2, 3, 4, 5].map((_, idx) => (
              <VStack key={idx} alignItems={"flex-start"} gap={4}>
                <Box
                  border="3px solid black"
                  borderRadius={0}
                  boxShadow="4px 4px 0px 0px #000"
                  w="full"
                  overflow="hidden"
                  aspectRatio={1}
                >
                  <Skeleton w="full" h="full" startColor="gray.800" endColor="gray.600" />
                </Box>
              </VStack>
            ))}
          </Grid>
        </motion.div>
      ) : posts.length === 0 ? (
        <motion.div
          key="posts-empty"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <NoPostsFound />
        </motion.div>
      ) : (
        <motion.div
          key="posts-data"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Grid
            templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            gap={1}
            columnGap={1}
          >
            {posts.map((post) => (
              <ProfilePost post={post} key={post.id} />
            ))}
          </Grid>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfilePosts;

const NoPostsFound = () => {
  return (
    <Flex flexDir={"column"} textAlign={"center"} mx={"auto"} mt={10}>
      <Text fontSize={"2xl"}>No Posts Found🤔</Text>
    </Flex>
  );
};
