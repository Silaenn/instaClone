import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import GoogleAuth from "./GoogleAuth";
import Signup from "./Signup";
import Login from "./Login";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box
        bg={"white"}
        border={"3px solid black"}
        borderRadius={0}
        padding={8}
        boxShadow={"8px 8px 0px 0px #000"}
      >
        <VStack spacing={6}>
          <Text
            fontSize={"5xl"}
            fontWeight={900}
            fontFamily="'Space Grotesk', sans-serif"
            letterSpacing={"-2px"}
            cursor={"pointer"}
            textTransform={"uppercase"}
            lineHeight={1}
            bg="black"
            color="white"
            px={4}
            py={2}
            border="4px solid black"
            boxShadow="6px 6px 0px 0px #BEF264"
          >
            THREADBOX
          </Text>

          {isLogin ? <Login /> : <Signup />}

          {/* {----------------OR------------} */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"2px"} bg={"black"} />
            <Text mx={2} color={"black"} fontWeight={"bold"}>
              OR
            </Text>
            <Box flex={2} h={"2px"} bg={"black"} />
          </Flex>

          <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
        </VStack>
      </Box>

      <Box
        bg={"retro.pink"}
        border={"3px solid black"}
        borderRadius={0}
        padding={5}
        boxShadow={"8px 8px 0px 0px #000"}
      >
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14} fontWeight={"bold"} color={"white"}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>

          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"black"}
            fontWeight={"extrabold"}
            textDecoration={"underline"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign Up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
