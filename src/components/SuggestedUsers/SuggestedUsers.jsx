import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
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

      <MotionFlex
         alignItems={"center"}
         justifyContent={"space-between"}
         w={"full"}
         variants={childVariant}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
      >
         <Text {...homeSectionTitle}>Suggested for you</Text>
         {isLoading ? null : (
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
      </MotionFlex>

      {isLoading && (
         <MotionBox
           bg="white"
           border="2px solid black"
           boxShadow="4px 4px 0px 0px #000"
           p={4}
           variants={childVariant}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
           Loading suggestions...
         </MotionBox>
      )}

      <motion.div
         variants={containerVariant}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
      >
         {!isLoading &&
           suggestedUsers.map((user) => (
             <motion.div key={user.id} variants={childVariant}>
               <SuggestedUser user={user} />
             </motion.div>
           ))}
      </motion.div>

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
