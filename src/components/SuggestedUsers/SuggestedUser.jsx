import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import useFollowUser from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

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
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} p={2} border="2px solid transparent" _hover={{ border: "2px solid black", bg: "white", boxShadow: "4px 4px 0px 0px #000", transform: "translate(-2px, -2px)" }} transition="0.1s">
      <Flex alignItems={"center"} gap={2}>
        <Link to={`/${user.username}`}>
          <Avatar src={user.profilePicURL} size={"md"} border="2px solid black" borderRadius={0} />
        </Link>
        <VStack spacing={0} alignItems={"flex-start"}>
          <Link to={`/${user.username}`}>
            <Box fontSize={14} fontWeight={900} textTransform="uppercase">
              {user.username}
            </Box>
          </Link>
          <Box fontSize={11} color={"black"} opacity={0.6} fontWeight="bold">
            {user.followers.length} followers
          </Box>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid && (
        <Button
          fontSize={12}
          bg={isFollowing ? "black" : "retro.cyan"}
          color={isFollowing ? "white" : "black"}
          px={4}
          h={8}
          fontWeight={900}
          borderRadius={0}
          border="2px solid black"
          boxShadow="2px 2px 0px 0px #000"
          _hover={{ transform: "translate(-1px, -1px)", boxShadow: "3px 3px 0px 0px #000" }}
          onClick={onFollowUSer}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "FOLLOW"}
        </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;
