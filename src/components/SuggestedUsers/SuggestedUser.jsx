import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import useFollowUser from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";
import { homeButton, homeSurfaceSoft } from "../../styles/homeStyles";

const SuggestedUser = ({ user, setUser }) => {
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
  const authUser = useAuthStore((state) => state.user);

  const onFollowUSer = async () => {
    await handleFollowUser();

    if (setUser) {
      setUser({
        ...user,
        followers: isFollowing
          ? user.followers.filter((follower) => follower.uid !== authUser.uid)
          : [...user.followers, authUser],
      });
    }
  };

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      p={3}
      {...homeSurfaceSoft}
      transition="0.1s"
    >
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
          onClick={onFollowUSer}
          isLoading={isUpdating}
          {...homeButton}
          _hover={{ transform: "translate(2px, 2px)", boxShadow: "none" }}
        >
          {isFollowing ? "Unfollow" : "FOLLOW"}
        </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;
