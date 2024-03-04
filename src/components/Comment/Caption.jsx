import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";
import useUserProfileStore from "../../store/userProfileStore";

const Caption = ({ post }) => {
  const userProfile = useUserProfileStore((state) => state.userProfile);
  return (
    <Flex gap={4} alignItems={"center"}>
      <Link to={`/${userProfile.username}`}>
        <Avatar src={userProfile.profilePicURL} name={"username"} size={"sm"} />
      </Link>
      <Flex direction={"column"}>
        <Flex gap={1} direction={"column"} justifyItems={"center"}>
          <Link to={`/${userProfile.username}`}>
            <Text fontWeight={"bold"} fontSize={12}>
              {userProfile.username}
            </Text>
          </Link>

          <Text fontSize={14}>{post.caption}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {timeAgo(post.createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Caption;
