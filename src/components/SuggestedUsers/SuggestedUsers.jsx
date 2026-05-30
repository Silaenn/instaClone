import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();

  // optional render loading skeleton
  if (isLoading) return null;
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      {suggestedUsers.length !== 0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={14} fontWeight={900} color={"black"} textTransform="uppercase">
            Suggested for you
          </Text>
          <Text
            fontSize={12}
            fontWeight={900}
            _hover={{ color: "retro.pink" }}
            cursor={"pointer"}
            textDecoration="underline"
          >
            SEE ALL
          </Text>
        </Flex>
      )}

      {suggestedUsers.map((user) => (
        <SuggestedUser user={user} key={user.id} />
      ))}

      <Box fontSize={12} color={"black"} fontWeight="bold" mt={5} alignSelf={"start"}>
        © 2024 BUILT BY{" "}
        <Link
          href="https://www.youtube.com/@asaprogrammer_"
          target="_blank"
          color="retro.pink"
          fontSize={14}
          fontWeight={900}
          textDecoration="underline"
        >
          VIBE TEAM
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
