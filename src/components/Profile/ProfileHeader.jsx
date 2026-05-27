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
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <Avatar
        size={{ base: "xl", md: "2xl" }}
        src={userProfile.profilePicURL}
        border="4px solid"
        borderColor="retro.pink"
        p="2px"
        bg="retro.blue"
        mx={"auto"}
      />

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>
            {userProfile.username}
          </Text>
          {visitingOwnProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"white"}
                color={"black"}
                _hover={{ bg: "whiteAlpha.800" }}
                size={{ base: "xs", md: "sm" }}
                onClick={onOpen}
              >
                Edit Profile
              </Button>
            </Flex>
          )}

          {visitingAnotherProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"blue.500"}
                color={"white"}
                _hover={{ bg: "blue.600" }}
                size={{ base: "xs", md: "sm" }}
                onClick={handleFollowUser}
                isLoading={isUpdating}
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
            </Flex>
          )}
        </Flex>

        <Flex gap={{ base: 2, sm: 4 }} alignItems={"center"} justifyContent={{ base: "center", sm: "flex-start" }}>
          <Box bg="white" p={2} border="2px solid" borderColor="retro.border" borderRadius="lg" boxShadow="4px 4px 0px 0px #2D3748">
            <Text as="span" fontWeight={"bold"} mr={1}>{userProfile.posts.length}</Text>
            Posts
          </Box>
          <Box bg="white" p={2} border="2px solid" borderColor="retro.border" borderRadius="lg" boxShadow="4px 4px 0px 0px #2D3748">
            <Text as="span" fontWeight={"bold"} mr={1}>{userProfile.followers.length}</Text>
            Followers
          </Box>
          <Box bg="white" p={2} border="2px solid" borderColor="retro.border" borderRadius="lg" boxShadow="4px 4px 0px 0px #2D3748">
            <Text as="span" fontWeight={"bold"} mr={1}>{userProfile.following.length}</Text>
            Following
          </Box>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {userProfile.fullName}
          </Text>
        </Flex>
        <Text fontSize={"sm"}>{userProfile.bio}</Text>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default ProfileHeader;
