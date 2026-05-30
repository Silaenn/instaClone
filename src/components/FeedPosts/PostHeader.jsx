import {
  Avatar,
  Box,
  Button,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";
import { timeAgo } from "../../utils/timeAgo";

const PostHeader = ({ post, creatorProfile }) => {
  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(
    post.createBy
  );
  return (
    <Flex
      justifyContent={"space-between"}
      my={2}
      alignItems={"center"}
      w={"full"}
    >
      <Flex alignItems={"center"} gap={2}>
        {creatorProfile ? (
          <Link to={`/${creatorProfile.username}`}>
            <Avatar
              src={creatorProfile.profilePicURL}
              alt="user profile pic"
              size={"sm"}
              border={"2px solid black"}
            />
          </Link>
        ) : (
          <SkeletonCircle size="10" />
        )}

        <Flex fontSize={14} fontWeight={"extrabold"} gap={2}>
          {creatorProfile ? (
            <Link to={`/${creatorProfile.username}`}>
              {creatorProfile.username}
            </Link>
          ) : (
            <Skeleton w={"100px"} h={"10px"} />
          )}
          <Box color={"black"} opacity={0.6} fontWeight={"medium"}>• {timeAgo(post.createdAt)}</Box>
        </Flex>
      </Flex>

      <Box cursor={"pointer"}>
        <Button
          size={"xs"}
          bg={isFollowing ? "black" : "retro.main"}
          color={isFollowing ? "white" : "black"}
          onClick={handleFollowUser}
          isLoading={isUpdating}
          fontSize={12}
          fontWeight={"extrabold"}
          borderRadius={0}
          border={"2px solid black"}
          boxShadow={"2px 2px 0px 0px #000"}
          _hover={{
            transform: "translate(-1px, -1px)",
            boxShadow: "3px 3px 0px 0px #000",
          }}
          _active={{
            transform: "translate(1px, 1px)",
            boxShadow: "none",
          }}
          transition={"0.1s"}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
