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
            />
          </Link>
        ) : (
          <SkeletonCircle size="10" />
        )}

        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          {creatorProfile ? (
            <Link to={`/${creatorProfile.username}`}>
              {creatorProfile.username}
            </Link>
          ) : (
            <Skeleton w={"100px"} h={"10px"} />
          )}
          <Box color={"gray.500"}>• {timeAgo(post.createdAt)}</Box>
        </Flex>
      </Flex>

      <Box cursor={"pointer"}>
        <Button
          size={"xs"}
          bg={"transparent"}
          onClick={handleFollowUser}
          isLoading={isUpdating}
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{
            color: "white",
          }}
          transition={"0.2s ease-in-out"}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
