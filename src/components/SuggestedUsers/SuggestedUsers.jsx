import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
import { homeSectionTitle } from "../../styles/homeStyles";

const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();

  return (
    <VStack alignItems="stretch" gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
       <Text {...homeSectionTitle}>Suggested for you</Text>
       {isLoading ? null : (
         <Text
           fontSize={12}
           fontWeight={900}
           _hover={{ color: "retro.pink" }}
           cursor={"pointer"}
           textDecoration="underline"
         >
           SEE ALL
         </Text>
       )}
      </Flex>

      {isLoading && (
       <Box
         bg="white"
         border="2px solid black"
         boxShadow="4px 4px 0px 0px #000"
         p={4}
       >
         Loading suggestions...
       </Box>
      )}

      {!isLoading &&
       suggestedUsers.map((user) => <SuggestedUser user={user} key={user.id} />)}

      <Box fontSize={12} color={"black"} fontWeight="bold" pt={2} alignSelf={"start"}>
       © 2024 BUILT BY{" "}
       <Link
         href="https://www.youtube.com/@asaprogrammer_"
         target="_blank"
          color="retro.pink"
          fontSize={14}
          fontWeight={900}
          textDecoration="underline"
        >
          THREADBOX TEAM
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
