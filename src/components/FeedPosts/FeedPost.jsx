import React from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Box, Image } from "@chakra-ui/react";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";

const FeedPost = ({ post }) => {
  const { userProfile } = useGetUserProfileById(post.createBy);
  return (
    <Box
      bg="white"
      border="3px solid black"
      borderRadius="0px"
      overflow="hidden"
      boxShadow="8px 8px 0px 0px #000"
      mb={10}
      p={4}
    >
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={4} borderRadius={0} overflow={"hidden"} border="3px solid black" bg="black">
        <Image src={post.imageURL} alt={"FEED POST IMG"} w="full" />
      </Box>
      <PostFooter post={post} creatorProfile={userProfile} />
    </Box>
  );
};

export default FeedPost;
