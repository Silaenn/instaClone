import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import useuserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import EditProfile from "./EditProfile";
import useFollowUser from "../../hooks/useFollowUser";

const ProfileHeader = () => {
  const { userProfile } = useuserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(
    userProfile?.uid
  );

  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile.username;
  const visitingAnotherProfileAndAuth =
    authUser && authUser.username !== userProfile.username;

  const stats = [
    { label: "Posts", value: userProfile.posts.length },
    { label: "Followers", value: userProfile.followers.length },
    { label: "Following", value: userProfile.following.length },
  ];

  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <Avatar
        size={{ base: "xl", md: "2xl" }}
        src={userProfile.profilePicURL}
        border="4px solid black"
        p="2px"
        bg="retro.main"
        mx={"auto"}
        borderRadius={0}
      />

      <VStack alignItems={{ base: "center", sm: "start" }} gap={2} mx={"auto"} flex={1}>
        <Text
          fontSize={{ base: "md", md: "2xl" }}
          fontWeight={900}
          textTransform="uppercase"
          textAlign={{ base: "center", sm: "left" }}
        >
          {userProfile.username}
        </Text>

        <Text fontSize={"sm"} textAlign={{ base: "center", sm: "left" }}>
          {userProfile.bio}
        </Text>

        <Flex
          gap={{ base: 2, sm: 4 }}
          alignItems={"center"}
          justifyContent={{ base: "center", sm: "flex-start" }}
          flexWrap="wrap"
        >
          {visitingOwnProfileAndAuth && (
            <Button
              bg={"retro.main"}
              color={"black"}
              border="3px solid black"
              borderRadius="0px"
              boxShadow="4px 4px 0px 0px #000"
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight={900}
              h={{ base: "32px", md: "38px" }}
              px={{ base: 2, md: 4 }}
              _hover={{
                transform: "translate(-2px, -2px)",
                boxShadow: "6px 6px 0px 0px #000",
                bg: "retro.main",
              }}
              transition="0.1s"
              onClick={onOpen}
            >
              Edit Profile
            </Button>
          )}

          {visitingAnotherProfileAndAuth && (
            <Button
              bg={isFollowing ? "black" : "retro.main"}
              color={isFollowing ? "white" : "black"}
              border="3px solid black"
              borderRadius="0px"
              boxShadow="4px 4px 0px 0px #000"
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight={900}
              h={{ base: "32px", md: "38px" }}
              px={{ base: 2, md: 4 }}
              _hover={{
                transform: "translate(-2px, -2px)",
                boxShadow: "6px 6px 0px 0px #000",
                bg: isFollowing ? "black" : "retro.main",
              }}
              transition="0.1s"
              onClick={handleFollowUser}
              isLoading={isUpdating}
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </Button>
          )}

          {stats.map(({ label, value }) => (
            <Box
              key={label}
              bg="white"
              h={{ base: "32px", md: "38px" }}
              px={{ base: 2, md: 3 }}
              display="flex"
              alignItems="center"
              border="3px solid black"
              borderRadius="0px"
              boxShadow="4px 4px 0px 0px #000"
              fontSize={{ base: "xs", md: "sm" }}
            >
              <Text as="span" fontWeight={900} mr={1}>
                {value}
              </Text>
              {label}
            </Box>
          ))}
        </Flex>
      </VStack>

      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default ProfileHeader;