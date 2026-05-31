import { Box, Container, Flex, Grid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";
import { homeSurface, homeSurfaceSoft, homeSectionTitle } from "../../styles/homeStyles";
import { slideInDownVariant, slideInRightVariant } from "../../animations/variants";

const MotionBox = motion(Box);

const Homepage = () => {
  return (
    <Container maxW={"container.xl"} py={{ base: 4, md: 6, lg: 8 }} px={{ base: 2, md: 4 }}>
      <Grid templateColumns={{ base: "1fr", xl: "minmax(0, 1.65fr) minmax(320px, 0.85fr)" }} gap={{ base: 6, xl: 8 }} alignItems="start">
        <VStack alignItems="stretch" spacing={6}>
          <MotionBox
            {...homeSurface}
            p={{ base: 4, md: 6 }}
            variants={slideInDownVariant}
            initial="hidden"
            animate="visible"
          >
            <Text {...homeSectionTitle}>Home</Text>
            <Flex
              direction={{ base: "column", md: "row" }}
              justifyContent="space-between"
              alignItems={{ base: "flex-start", md: "center" }}
              gap={3}
              mt={2}
            >
              <Box>
                <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight={900} lineHeight={0.95} textTransform="uppercase">
                  Your feed
                </Text>
                <Text mt={2} maxW="2xl" fontSize="sm" fontWeight={700} opacity={0.75}>
                  A cleaner, louder feed with the same retro energy.
                </Text>
              </Box>
              <Box
                bg="retro.main"
                border="2px solid black"
                px={4}
                py={2}
                fontWeight={900}
                textTransform="uppercase"
                boxShadow="4px 4px 0px 0px #000"
              >
                Premium retro
              </Box>
            </Flex>
          </MotionBox>

          <FeedPosts />
        </VStack>

        <MotionBox
          display={{ base: "none", xl: "block" }}
          position="sticky"
          top={6}
          alignSelf="start"
          variants={slideInRightVariant}
          initial="hidden"
          animate="visible"
        >
          <Box {...homeSurfaceSoft} p={4}>
            <SuggestedUsers />
          </Box>
        </MotionBox>
      </Grid>
    </Container>
  );
};

export default Homepage;
