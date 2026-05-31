import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import SuggestedUserSkeleton from "./SuggestedUserSkeleton";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
import { homeSectionTitle } from "../../styles/homeStyles";
import { childVariant, containerVariant } from "../../animations/variants";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();

  return (
    <VStack alignItems="stretch" gap={4}>
      <SuggestedHeader />

      <Flex
         alignItems={"center"}
         justifyContent={"space-between"}
         w={"full"}
      >
         <Text {...homeSectionTitle}>Suggested for you</Text>
         {!isLoading && (
           <Text
             fontSize={12}
             fontWeight={900}
             _hover={{ color: "retro.pink", transform: "scale(1.05)" }}
             transition="0.2s"
             cursor={"pointer"}
             textDecoration="underline"
           >
             SEE ALL
           </Text>
         )}
      </Flex>

      {isLoading && (
        <VStack gap={3}>
          {[0, 1, 2].map((_, idx) => (
            <SuggestedUserSkeleton key={idx} />
          ))}
        </VStack>
      )}

      {!isLoading && (
        <VStack
          as={motion.div}
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          gap={3}
          alignItems="stretch"
        >
          {suggestedUsers.map((user) => (
            <motion.div key={user.id} variants={childVariant}>
              <SuggestedUser user={user} />
            </motion.div>
          ))}
        </VStack>
      )}

      <MotionBox
         fontSize={12}
         color={"black"}
         fontWeight="bold"
         pt={2}
         alignSelf={"start"}
         variants={childVariant}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
      >
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
      </MotionBox>
    </VStack>
  );
};

export default SuggestedUsers;
