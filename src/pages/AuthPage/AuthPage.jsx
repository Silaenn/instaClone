import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import AuthForm from "../../components/AuthForm/AuthForm";
import { slideInLeftVariant, slideInRightVariant, fadeInVariant } from "../../animations/variants";
import { useState } from "react";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4} py={10}>
      <Container maxW={"container.lg"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={{ base: 0, md: 4, lg: 12 }}>
          {/* {left hand-side - Image} */}
          <MotionBox
            display={{ base: "none", md: "block" }}
            variants={slideInLeftVariant}
            initial="hidden"
            animate="visible"
          >
            <MotionImage
              src="/auth.png"
              maxH={{ md: "500px", lg: "700px" }}
              alt="Phone img"
              variants={slideInLeftVariant}
              initial="hidden"
              animate="visible"
              objectFit="contain"
            />
          </MotionBox>

          {/* {Right hand-side - Form with toggle animation} */}
          <AnimatePresence mode="wait">
            <MotionBox
              key={isLogin ? "login" : "signup"}
              variants={slideInRightVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
              w={{ base: "full", sm: "400px" }}
            >
              <VStack spacing={6} align={"stretch"}>
                <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />
                <Box textAlign={"center"} w="full" fontWeight={900} fontSize="xl" textTransform="uppercase" letterSpacing="1px">
                  Get the app.
                </Box>
                <Flex gap={5} justifyContent={"center"} w="full">
                  <Image src="/playstore.png" h={"12"} alt="Playstore logo" border="2px solid black" p={1} bg="white" boxShadow="4px 4px 0px 0px #000" />
                  <Image src="/microsoft.png" h={"14"} alt="Microsoft logo" border="2px solid black" p={1} bg="white" boxShadow="4px 4px 0px 0px #000" />
                </Flex>
              </VStack>
            </MotionBox>
          </AnimatePresence>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
