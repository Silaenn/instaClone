import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { scaleInVariant } from "../../animations/variants";

const FeedPost = ({ post }) => {
  const { userProfile } = useGetUserProfileById(post.createBy);
  return (
    <motion.div
      variants={scaleInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Box
        bg="white"
        border="3px solid black"
        borderRadius={0}
        overflow="hidden"
        boxShadow="8px 8px 0px 0px #000"
        p={{ base: 3, md: 4 }}
      >
        <PostHeader post={post} creatorProfile={userProfile} />
        <Box my={4} overflow={"hidden"} border="3px solid black" bg="black" boxShadow="4px 4px 0px 0px #000" aspectRatio={1}>
          <Image src={post.imageURL} alt={"FEED POST IMG"} w="full" h="full" objectFit="cover" />
        </Box>
        <PostFooter post={post} creatorProfile={userProfile} />
      </Box>
    </motion.div>
  );
};

export default FeedPost;
