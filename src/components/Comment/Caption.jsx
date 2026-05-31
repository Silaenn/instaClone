import { Avatar, Flex, Text, Badge } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";
import useUserProfileStore from "../../store/userProfileStore";

const Caption = ({ post }) => {
  const userProfile = useUserProfileStore((state) => state.userProfile);
  return (
    <Flex
      gap={4}
      alignItems={"flex-start"}
      p={3}
      w="full"
      bg="retro.yellow"
      border="2px solid black"
      borderLeft="5px solid black"
      position="relative"
    >
      <Link to={`/${userProfile.username}`}>
        <Avatar src={userProfile.profilePicURL} name={"username"} size={"sm"} border="2px solid black" />
      </Link>
      <Flex direction={"column"} flex={1} minW={0}>
        <Flex gap={1} direction={"column"} justifyItems={"center"}>
          <Flex alignItems="center" gap={2}>
            <Link to={`/${userProfile.username}`}>
              <Text fontWeight={"bold"} fontSize={12}>
                {userProfile.username}
              </Text>
            </Link>
            <Badge
              fontSize={9}
              bg="black"
              color="white"
              borderRadius={0}
              px={1}
              letterSpacing={1}
            >
              CAPTION
            </Badge>
          </Flex>
          <Text fontSize={14}>{post.caption}</Text>
        </Flex>
        <Text fontSize={12} color={"gray.600"} mt={1}>
          {timeAgo(post.createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Caption;