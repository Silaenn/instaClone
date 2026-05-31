import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";
import { timeAgo } from "../../utils/timeAgo";
import { homeButton, homeSurfaceSoft } from "../../styles/homeStyles";

const PostHeader = ({ post, creatorProfile }) => {
  // guard missing creatorProfile to avoid runtime error when creating a new post
  const safeCreator =
    creatorProfile ||
    (post && post.createBy
      ? { uid: post.createBy, username: "", profilePicURL: "", followers: [] }
      : null);

  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(
    safeCreator ? safeCreator.uid || post.createBy : undefined
  );

  if (!safeCreator) {
    // minimal placeholder while data not available
    return (
      <Flex
        justifyContent={"space-between"}
        gap={4}
        alignItems={"center"}
        w={"full"}
        p={3}
        {...homeSurfaceSoft}
      >
        <Box>Loading...</Box>
      </Flex>
    );
  }

  return (
    <Flex
      justifyContent={"space-between"}
      gap={4}
      alignItems={"center"}
      w={"full"}
      p={3}
      {...homeSurfaceSoft}
    >
      <Flex alignItems={"center"} gap={3} minW={0}>
        <Link to={`/${safeCreator.username || "#"}`}>
          <Avatar
            src={safeCreator.profilePicURL}
            alt="user profile pic"
            size={"sm"}
            border={"2px solid black"}
          />
        </Link>

        <Flex fontSize={14} fontWeight={"extrabold"} gap={2} wrap="wrap">
          <Link to={`/${safeCreator.username || "#"}`}>
            {safeCreator.username || "Unknown"}
          </Link>
          <Box color={"black"} opacity={0.6} fontWeight={"medium"}>
            • {timeAgo(post.createdAt)}
          </Box>
        </Flex>
      </Flex>

      <Box cursor={"pointer"} flexShrink={0}>
        <Button
          size={"xs"}
          bg={isFollowing ? "black" : "retro.main"}
          color={isFollowing ? "white" : "black"}
          onClick={handleFollowUser}
          isLoading={isUpdating}
          fontSize={12}
          fontWeight={"extrabold"}
          px={4}
          {...homeButton}
          _hover={{ transform: "translate(2px, 2px)", boxShadow: "none" }}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
