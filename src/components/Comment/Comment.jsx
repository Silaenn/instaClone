import {Box, Avatar, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";
import { homeSurfaceSoft } from "../../styles/homeStyles";
const Comment = ({ comment }) => {
  const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy);
  if (isLoading) return <CommentSkeleton />;
  return (
    <Flex gap={4} alignItems={"flex-start"} {...homeSurfaceSoft} p={3} w="full" minW={0}>
      <Link to={`/${userProfile.username}`}>
        <Avatar src={userProfile.profilePicURL} name={"username"} size={"sm"} />
      </Link>
      <Flex direction={"column"} w="full" flex={1} minW={0}>
        <Flex gap={1} direction={"column"} justifyItems={"center"} w="full" minW={0}>
          <Link to={`/${userProfile.username}`}>
            <Text fontWeight={"bold"} fontSize={12} w="full" noOfLines={1}>
              {userProfile.username}
            </Text>
          </Link>
          <Text fontSize={14} w="full">
            {comment.comment}
          </Text>
        </Flex>
        <Text fontSize={12} color={"gray"} mt={1} w="full">
          {timeAgo(comment.createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;

const CommentSkeleton = () => {
  return (
    <Flex gap={4} w={"full"} alignItems={"center"} {...homeSurfaceSoft} p={3} minW={0}>
      <Box border="2px solid black" p="2px" borderRadius={0}>
        <SkeletonCircle h={10} w={10} />
      </Box>
      <Flex gap={1} flexDir={"column"} flex={1} minW={0}>
        <Skeleton height={12} width={120} borderRadius={0} />
        <Skeleton height={10} width={200} borderRadius={0} />
      </Flex>
    </Flex>
  );
};
