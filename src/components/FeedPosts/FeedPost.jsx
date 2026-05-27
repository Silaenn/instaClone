import React from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Box, Image } from "@chakra-ui/react";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";

const FeedPost = ({ post }) => {
  const { userProfile } = useGetUserProfileById(post.createBy);
  console.log(post.createBy);
  console.log(userProfile);
  return (
    <Box
      bg="white"
      border="2px solid"
      borderColor="retro.border"
      borderRadius="24px"
      overflow="hidden"
      boxShadow="6px 6px 0px 0px #2D3748"
      mb={10}
      p={4}
    >
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={2} borderRadius={12} overflow={"hidden"} border="2px solid" borderColor="retro.border">
        <Image src={post.imageURL} alt={"FEED POST IMG"} />
      </Box>
      <PostFooter post={post} creatorProfile={userProfile} />
    </Box>
  );
};

export default FeedPost;
