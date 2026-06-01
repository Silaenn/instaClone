import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import SuggestedUserSkeleton from "./SuggestedUserSkeleton";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
import { homeSectionTitle } from "../../styles/homeStyles";
import { childVariant, containerVariant } from "../../animations/variants";

const MotionBox = motion(Box);

const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();

  return (
    <VStack alignItems="stretch" gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text {...homeSectionTitle}>Suggested for you</Text>
        {!isLoading && suggestedUsers.length > 0 && (
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

      <AnimatePresence mode="wait">
        {isLoading ? (
          <VStack key="suggested-skeleton" gap={3} w="full">
            {[0, 1, 2].map((_, idx) => (
              <motion.div
                key={`skel-${idx}`}
                style={{ width: "100%" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SuggestedUserSkeleton />
              </motion.div>
            ))}
          </VStack>
        ) : suggestedUsers.length > 0 ? (
          <VStack
            key="suggested-users"
            as={motion.div}
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            gap={3}
            alignItems="stretch"
            w="full"
          >
            {suggestedUsers.map((user) => (
              <motion.div key={user.id} style={{ width: "100%" }} variants={childVariant}>
                <SuggestedUser user={user} />
              </motion.div>
            ))}
          </VStack>
        ) : null}
      </AnimatePresence>


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