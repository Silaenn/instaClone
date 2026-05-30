import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.lg"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={20}>
          {/* {left hand-side} */}

          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={700} alt="Phone img" />
          </Box>

          {/* {Right hand-side} */}

          <VStack spacing={6} align={"stretch"} minW={{ base: "full", md: "400px" }}>
            <AuthForm />
            <Box textAlign={"center"} fontWeight={900} fontSize="xl" textTransform="uppercase" letterSpacing="1px">
              Get the app.
            </Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={"14"} alt="Playstore logo" border="2px solid black" p={1} bg="white" boxShadow="4px 4px 0px 0px #000" />
              <Image src="/microsoft.png" h={"14"} alt="Microsoft logo" border="2px solid black" p={1} bg="white" boxShadow="4px 4px 0px 0px #000" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
