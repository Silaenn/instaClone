import {
  Container,
  Flex,
  Link,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
  Box
} from "@chakra-ui/react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ProfilePage = () => {
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUsername(username);
  const userNotFound = !isLoading && !userProfile;
  if (userNotFound) return <UserNotFound />;

  return (
    <Container maxW={"container.lg"} py={5}>
      <Flex py={10} px={4} pl={{ base: 4, md: 10 }} w={"full"} mx={"auto"} flexDirection={"column"}>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="header-skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProfileHeaderSkelaton />
            </motion.div>
          ) : userProfile ? (
            <motion.div
              key="header-data"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <ProfileHeader />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Flex>

      <Flex
        px={{ base: 2, sm: 4 }}
        maxW={"full"}
        mx={"auto"}
        borderTop={"3px solid black"}
        direction={"column"}
      >
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
};

export default ProfilePage;

const ProfileHeaderSkelaton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
      justifyContent={"center"}
      alignItems={{ base: "center", sm: "flex-start" }}
    >
      <Box border="4px solid black" p="4px" borderRadius={0} bg="retro.main">
        <SkeletonCircle size={{ base: "20", md: "24" }} />
      </Box>

      <VStack
        alignItems={{ base: "center", sm: "start" }}
        gap={2}
        flex={1}
        w={{ base: "full", sm: "auto" }}
      >
        {/* Username */}
        <Skeleton 
          height={{ base: "20px", md: "30px" }} 
          width={{ base: "150px", sm: "200px" }} 
          borderRadius={0} 
        />
        
        {/* FullName */}
        <Skeleton 
          height="16px" 
          width={{ base: "120px", sm: "150px" }} 
          borderRadius={0} 
        />
        
        {/* Bio */}
        <Skeleton 
          height="16px" 
          width={{ base: "160px", sm: "250px" }} 
          borderRadius={0} 
        />

        {/* Stats Row */}
        <Flex 
          gap={{ base: 2, sm: 4 }} 
          justifyContent={{ base: "center", sm: "flex-start" }}
          flexWrap="wrap"
        >
          <Skeleton height="32px" width="80px" borderRadius={0} />
          <Skeleton height="32px" width="100px" borderRadius={0} />
          <Skeleton height="32px" width="120px" borderRadius={0} />
          <Skeleton height="32px" width="90px" borderRadius={0} />
        </Flex>
      </VStack>
    </Flex>
  );
};

const UserNotFound = () => {
  return (
    <Flex flexDir={"column"} textAlign={"center"} mx={"auto"} mt={20} p={10} border="4px solid black" bg="white" boxShadow="10px 10px 0px 0px #000">
      <Text fontSize={"4xl"} fontWeight={900}>USER NOT FOUND</Text>
      <Link
        as={RouterLink}
        to={"/"}
        bg={"retro.main"}
        color={"black"}
        border="3px solid black"
        p={2}
        fontWeight={900}
        w={"max-content"}
        mx={"auto"}
        mt={4}
        boxShadow="4px 4px 0px 0px #000"
        _hover={{ transform: "translate(-2px, -2px)", boxShadow: "6px 6px 0px 0px #000" }}
      >
        GO HOME
      </Link>
    </Flex>
  );
};
