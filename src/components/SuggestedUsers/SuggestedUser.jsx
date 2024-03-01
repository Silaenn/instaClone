import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import useFollowUser from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore";

const SuggestedUser = ({ user, setUser }) => {
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
  const authUser = useAuthStore((state) => state.user);

  const onFollowUSer = async () => {
    await handleFollowUser();

    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((follower) => follower.uid !== authUser.uid)
        : [...user.followers, authUser],
    });
  };

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={user.profilePicURL} name={name} size={"md"} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={12} fontWeight={"bold"}>
            {user.fullName}
          </Box>
          <Box fontSize={11} color={"gray.500"} textAlign={"start"}>
            {user.followers.length} followers
          </Box>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid && (
        <Button
          fontSize={13}
          bg={"transparent"}
          p={0}
          h={"max-content"}
          fontWeight={"medium"}
          color={"blue.400"}
          cursor={"pointer"}
          _hover={{ color: "white" }}
          onClick={onFollowUSer}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "follow"}
        </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;
